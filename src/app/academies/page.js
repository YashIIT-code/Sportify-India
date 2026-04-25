'use client';
import { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import AcademyCard from '../../components/AcademyCard';
import SearchBar from '../../components/SearchBar';
import FilterSidebar from '../../components/FilterSidebar';
import { academies } from '../../data/academies';

export default function AcademiesPage() {
  const searchParams = useSearchParams();
  const initialSport = searchParams.get('sport');
  const initialQuery = searchParams.get('q') || '';
  const initialSort = searchParams.get('sort') || 'rating';

  const [search, setSearch] = useState(initialQuery);
  const [filters, setFilters] = useState({
    sports: initialSport ? [initialSport] : [],
    priceRange: null,
    sortBy: initialSort
  });

  const filtered = useMemo(() => {
    let result = [...academies];
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(a =>
        a.name.toLowerCase().includes(q) || a.sport.toLowerCase().includes(q) ||
        a.location.toLowerCase().includes(q) || a.area.toLowerCase().includes(q)
      );
    }
    if (filters.sports.length > 0) result = result.filter(a => filters.sports.includes(a.sport));
    if (filters.priceRange) result = result.filter(a => a.fees >= filters.priceRange.min && a.fees <= filters.priceRange.max);

    switch (filters.sortBy) {
      case 'rating': result.sort((a, b) => b.rating - a.rating); break;
      case 'price-low': result.sort((a, b) => a.fees - b.fees); break;
      case 'price-high': result.sort((a, b) => b.fees - a.fees); break;
      case 'reviews': result.sort((a, b) => b.reviewCount - a.reviewCount); break;
    }
    return result;
  }, [search, filters]);

  return (
    <div className="page-listing container" id="academies-page">
      <div className="listing-header">
        <h1>{filters.sports.length === 1 ? `${filters.sports[0]} Academies` : 'All Academies'}</h1>
        <p className="listing-count">{filtered.length} {filtered.length === 1 ? 'academy' : 'academies'} found</p>
      </div>

      <div className="listing-search">
        <SearchBar value={search} onChange={setSearch} />
      </div>

      <div className="listing-layout">
        <FilterSidebar filters={filters} setFilters={setFilters} />
        <div className="listing-results">
          {filtered.length > 0 ? (
            <div className="academy-grid">
              {filtered.map(a => <AcademyCard key={a.id} academy={a} />)}
            </div>
          ) : (
            <div className="empty-state">
              <div className="empty-icon">🔍</div>
              <div className="empty-title">No academies found</div>
              <div className="empty-text">Try adjusting your search or filters</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
