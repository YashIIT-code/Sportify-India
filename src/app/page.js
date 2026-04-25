'use client';
import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import AcademyCard from '../components/AcademyCard';
import SearchBar from '../components/SearchBar';
import { academies, sports, getSportIcon, getSportColor } from '../data/academies';
import { useAuth } from '../context/AuthContext';

export default function HomePage() {
  const [search, setSearch] = useState('');
  const { user } = useAuth();

  const topRated = useMemo(() => [...academies].sort((a, b) => b.rating - a.rating).slice(0, 8), []);
  const affordable = useMemo(() => [...academies].sort((a, b) => a.fees - b.fees).slice(0, 4), []);

  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const h = new Date().getHours();
    setGreeting(h < 12 ? 'Good Morning' : h < 17 ? 'Good Afternoon' : 'Good Evening');
  }, []);

  return (
    <div className="page-home" id="home-page">
      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-greeting">{greeting ? `${greeting}${user ? `, ${user.displayName?.split(' ')[0]}` : ''} 👋` : '\u00A0'}</p>
          <h1 className="hero-title">Find Your Perfect<br/>Sports Academy</h1>
          <p className="hero-subtitle">Discover the best coaching near you in Delhi NCR — Football, Cricket, Tennis & Badminton</p>
          <div className="hero-search">
            <SearchBar value={search} onChange={setSearch} placeholder="Search by sport, academy name, or area..." />
            {search && (
              <Link href={`/academies?q=${encodeURIComponent(search)}`} className="hero-search-go">
                Search →
              </Link>
            )}
          </div>
          <div className="hero-stats">
            <div className="hero-stat"><span className="hero-stat-value">{academies.length}+</span><span className="hero-stat-label">Academies</span></div>
            <div className="hero-stat"><span className="hero-stat-value">4</span><span className="hero-stat-label">Sports</span></div>
            <div className="hero-stat"><span className="hero-stat-value">50+</span><span className="hero-stat-label">Coaches</span></div>
            <div className="hero-stat"><span className="hero-stat-value">1,500+</span><span className="hero-stat-label">Reviews</span></div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section container">
        <div className="section-header">
          <div><h2 className="section-title">Browse by Sport</h2><p className="section-subtitle">Choose your game</p></div>
        </div>
        <div className="category-grid">
          {sports.map(sport => (
            <Link key={sport} href={`/academies?sport=${sport}`} className="category-card" style={{ borderColor: getSportColor(sport) }}>
              <span className="category-icon">{getSportIcon(sport)}</span>
              <span className="category-name">{sport}</span>
              <span className="category-count">{academies.filter(a => a.sport === sport).length} academies</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Top Rated */}
      <section className="section container">
        <div className="section-header">
          <div><h2 className="section-title">⭐ Top Rated Academies</h2><p className="section-subtitle">Highest rated by our community</p></div>
          <Link href="/academies?sort=rating" className="section-link">View All →</Link>
        </div>
        <div className="academy-grid">
          {topRated.map(a => <AcademyCard key={a.id} academy={a} />)}
        </div>
      </section>

      {/* Budget Friendly */}
      <section className="section container">
        <div className="section-header">
          <div><h2 className="section-title">💰 Budget Friendly</h2><p className="section-subtitle">Quality coaching at affordable prices</p></div>
          <Link href="/academies?sort=price-low" className="section-link">View All →</Link>
        </div>
        <div className="academy-grid">
          {affordable.map(a => <AcademyCard key={a.id} academy={a} />)}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Start Your Sports Journey?</h2>
          <p>Explore academies, compare coaching, and find the perfect match for your goals.</p>
          <Link href="/academies" className="cta-btn">Explore All Academies →</Link>
        </div>
      </section>
    </div>
  );
}
