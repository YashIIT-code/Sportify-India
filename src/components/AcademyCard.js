'use client';
import Link from 'next/link';
import { useFavorites } from '../context/FavoritesContext';
import { getSportColor, getSportIcon } from '../data/academies';

export default function AcademyCard({ academy }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const fav = isFavorite(academy.id);

  const handleFav = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(academy.id);
  };

  return (
    <Link href={`/academies/${academy.id}`} className="academy-card" id={`card-${academy.id}`}>
      <div className="card-image-wrap">
        <img src={academy.images[0]} alt={academy.name} className="card-image" loading="lazy" />
        <span className="card-sport-badge" style={{ background: getSportColor(academy.sport) }}>
          {getSportIcon(academy.sport)} {academy.sport}
        </span>
        <button className={`card-fav-btn ${fav ? 'active' : ''}`} onClick={handleFav} aria-label="Favorite">
          {fav ? '❤️' : '🤍'}
        </button>
      </div>
      <div className="card-body">
        <h3 className="card-name">{academy.name}</h3>
        <div className="card-location">📍 {academy.location}</div>
        <div className="card-footer">
          <div className="card-rating">
            <span className="star">★</span> {academy.rating}
            <span className="count">({academy.reviewCount})</span>
          </div>
          <div className="card-fees">₹{academy.fees.toLocaleString()}<span>/mo</span></div>
        </div>
      </div>
    </Link>
  );
}
