'use client';
import { useAuth } from '../../context/AuthContext';
import { useFavorites } from '../../context/FavoritesContext';
import AcademyCard from '../../components/AcademyCard';
import { academies } from '../../data/academies';

export default function ProfilePage() {
  const { user, isAuthenticated, login, logout, loading } = useAuth();
  const { favorites } = useFavorites();
  const favAcademies = academies.filter(a => favorites.includes(a.id));

  if (loading) {
    return <div className="container" style={{ padding: '80px 20px', textAlign: 'center' }}>Loading...</div>;
  }

  if (!isAuthenticated) {
    return (
      <div className="page-profile container" id="profile-page">
        <div className="login-section">
          <div className="login-card">
            <span className="login-logo">🏆</span>
            <h1 className="login-title">Welcome to Sportify India</h1>
            <p className="login-subtitle">Sign in to save your favorite academies, write reviews, and get personalized recommendations</p>
            <button className="google-btn" onClick={login} id="google-login-btn">
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-profile container" id="profile-page">
      <div className="profile-layout">
        {/* Profile Card */}
        <div className="profile-card-web">
          <img
            src={user.photoURL || `https://ui-avatars.com/api/?name=${user.displayName}&background=0D9F6E&color=fff&size=128`}
            alt={user.displayName}
            className="profile-avatar-web"
          />
          <h2 className="profile-name-web">{user.displayName}</h2>
          <p className="profile-email-web">{user.email}</p>
          <div className="profile-stats">
            <div className="profile-stat">
              <span className="profile-stat-value">{favorites.length}</span>
              <span className="profile-stat-label">Saved</span>
            </div>
            <div className="profile-stat">
              <span className="profile-stat-value">0</span>
              <span className="profile-stat-label">Reviews</span>
            </div>
          </div>
          <button className="btn-logout" onClick={logout} id="logout-btn">Sign Out</button>
        </div>

        {/* Saved Academies */}
        <div className="profile-saved">
          <h2>❤️ Saved Academies</h2>
          {favAcademies.length > 0 ? (
            <div className="academy-grid">
              {favAcademies.map(a => <AcademyCard key={a.id} academy={a} />)}
            </div>
          ) : (
            <div className="empty-state">
              <div className="empty-icon">💚</div>
              <div className="empty-title">No saved academies yet</div>
              <div className="empty-text">Click the heart icon on any academy to save it here</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
