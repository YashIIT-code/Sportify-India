'use client';
import { useState, useMemo } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import PhotoGallery from '../../../components/PhotoGallery';
import ReviewCard from '../../../components/ReviewCard';
import WriteReviewModal from '../../../components/WriteReviewModal';
import { academies, getSportColor } from '../../../data/academies';
import { getReviewsByAcademyId } from '../../../data/reviews';
import { useFavorites } from '../../../context/FavoritesContext';

export default function AcademyDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const { isFavorite, toggleFavorite } = useFavorites();
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [localReviews, setLocalReviews] = useState([]);

  const academy = academies.find(a => a.id === id);
  const dbReviews = useMemo(() => getReviewsByAcademyId(id), [id]);
  const allReviews = [...localReviews, ...dbReviews];

  if (!academy) {
    return (
      <div className="container" style={{ padding: '80px 20px', textAlign: 'center' }}>
        <div className="empty-icon">😕</div>
        <h2>Academy not found</h2>
        <Link href="/academies" className="btn-primary" style={{ display: 'inline-block', marginTop: 16 }}>Browse Academies</Link>
      </div>
    );
  }

  const fav = isFavorite(academy.id);
  const sportColor = getSportColor(academy.sport);
  const renderStars = (r) => Array.from({ length: 5 }, (_, i) => i < Math.round(r) ? '★' : '☆').join('');

  const handleCall = () => window.open(`tel:${academy.contact}`, '_self');
  const handleWhatsApp = () => window.open(`https://wa.me/${academy.whatsapp}?text=Hi, I'm interested in joining ${academy.name}`, '_blank');
  const handleReviewSubmit = (review) => setLocalReviews(prev => [{ ...review, academyId: id }, ...prev]);

  return (
    <div className="page-detail" id="detail-page">
      {/* Breadcrumb */}
      <div className="container breadcrumb">
        <Link href="/">Home</Link> / <Link href="/academies">Academies</Link> / <span>{academy.name}</span>
      </div>

      <div className="detail-layout container">
        {/* Left Column */}
        <div className="detail-main">
          <PhotoGallery images={academy.images} />

          <div className="detail-header-row">
            <div>
              <span className="detail-sport-badge" style={{ background: sportColor }}>{academy.sport}</span>
              <h1 className="detail-name">{academy.name}</h1>
              <div className="detail-location">📍 {academy.location}</div>
              <div className="detail-rating-row">
                <span className="detail-stars">{renderStars(academy.rating)}</span>
                <span className="detail-rating-text">{academy.rating}</span>
                <span className="detail-review-count">({academy.reviewCount} reviews)</span>
              </div>
            </div>
            <button className={`detail-fav-btn ${fav ? 'active' : ''}`} onClick={() => toggleFavorite(academy.id)}>
              {fav ? '❤️ Saved' : '🤍 Save'}
            </button>
          </div>

          {/* About */}
          <section className="detail-section">
            <h2 className="detail-section-title">📋 About</h2>
            <p className="detail-description">{academy.description}</p>
          </section>

          {/* Coaches */}
          <section className="detail-section">
            <h2 className="detail-section-title">🏅 Coaches</h2>
            <div className="coaches-grid">
              {academy.coaches.map((coach, i) => (
                <div className="coach-card" key={i}>
                  <div className="coach-avatar">🧑‍🏫</div>
                  <div>
                    <div className="coach-name">{coach.name}</div>
                    <div className="coach-qual">{coach.qualification} · {coach.specialization}</div>
                    <div className="coach-exp">{coach.experience} experience</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Facilities */}
          <section className="detail-section">
            <h2 className="detail-section-title">🏟️ Facilities</h2>
            <div className="facility-list">
              {academy.facilities.map((f, i) => <span className="facility-tag" key={i}>✓ {f}</span>)}
            </div>
          </section>

          {/* Reviews */}
          <section className="detail-section">
            <div className="section-header" style={{ padding: 0 }}>
              <h2 className="detail-section-title">💬 Reviews</h2>
              <button className="section-link" onClick={() => setShowReviewModal(true)}>Write Review</button>
            </div>
            {allReviews.length > 0
              ? allReviews.map(r => <ReviewCard key={r.id} review={r} />)
              : <p className="detail-description">No reviews yet. Be the first!</p>}
          </section>
        </div>

        {/* Right Sidebar */}
        <aside className="detail-sidebar">
          <div className="sidebar-card">
            <h3>Monthly Fees</h3>
            <div className="sidebar-price">₹{academy.fees.toLocaleString()}<span>/month</span></div>
          </div>
          <div className="sidebar-card">
            <h3>Timings</h3>
            <p>{academy.timings}</p>
          </div>
          <div className="sidebar-card">
            <h3>Contact</h3>
            <button className="contact-btn btn-call" onClick={handleCall}>📞 Call Now</button>
            <button className="contact-btn btn-whatsapp" onClick={handleWhatsApp}>💬 WhatsApp</button>
          </div>
        </aside>
      </div>

      {showReviewModal && <WriteReviewModal onClose={() => setShowReviewModal(false)} onSubmit={handleReviewSubmit} />}
    </div>
  );
}
