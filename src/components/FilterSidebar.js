'use client';
import { sports, priceRanges, getSportIcon, getSportColor } from '../data/academies';

export default function FilterSidebar({ filters, setFilters }) {
  const toggleSport = (sport) => {
    setFilters(prev => ({
      ...prev,
      sports: prev.sports.includes(sport) ? prev.sports.filter(s => s !== sport) : [...prev.sports, sport]
    }));
  };

  const setPriceRange = (range) => {
    setFilters(prev => ({ ...prev, priceRange: prev.priceRange?.label === range.label ? null : range }));
  };

  const handleReset = () => setFilters({ sports: [], priceRange: null, sortBy: 'rating' });

  return (
    <aside className="filter-sidebar" id="filter-sidebar">
      <div className="filter-sidebar-header">
        <h3>Filters</h3>
        <button className="filter-reset-btn" onClick={handleReset}>Reset All</button>
      </div>

      <div className="filter-group">
        <h4 className="filter-group-title">Sport</h4>
        <div className="filter-options">
          {sports.map(sport => (
            <button
              key={sport}
              className={`filter-option ${filters.sports.includes(sport) ? 'active' : ''}`}
              onClick={() => toggleSport(sport)}
              style={filters.sports.includes(sport) ? { borderColor: getSportColor(sport), background: `${getSportColor(sport)}15` } : {}}
            >
              <span>{getSportIcon(sport)}</span> {sport}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-group">
        <h4 className="filter-group-title">Price Range</h4>
        <div className="filter-options">
          {priceRanges.map(range => (
            <button
              key={range.label}
              className={`filter-option ${filters.priceRange?.label === range.label ? 'active' : ''}`}
              onClick={() => setPriceRange(range)}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-group">
        <h4 className="filter-group-title">Sort By</h4>
        <div className="filter-options">
          {[
            { value: 'rating', label: '⭐ Rating' },
            { value: 'price-low', label: '💰 Price: Low' },
            { value: 'price-high', label: '💎 Price: High' },
            { value: 'reviews', label: '💬 Most Reviews' }
          ].map(opt => (
            <button
              key={opt.value}
              className={`filter-option ${filters.sortBy === opt.value ? 'active' : ''}`}
              onClick={() => setFilters(prev => ({ ...prev, sortBy: opt.value }))}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
