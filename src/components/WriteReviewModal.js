'use client';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export default function WriteReviewModal({ onClose, onSubmit }) {
  const { user, isAuthenticated } = useAuth();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = () => {
    if (rating === 0 || !comment.trim()) return;
    onSubmit({
      id: `r_${Date.now()}`,
      userId: user?.uid || 'anon',
      userName: user?.displayName || 'Anonymous',
      userAvatar: '👤',
      rating,
      comment: comment.trim(),
      createdAt: new Date().toISOString().split('T')[0]
    });
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        {!isAuthenticated ? (
          <div className="empty-state" style={{ padding: 20 }}>
            <div className="empty-icon">🔒</div>
            <div className="empty-title">Login Required</div>
            <div className="empty-text">Please login to write a review</div>
          </div>
        ) : (
          <>
            <h3 className="modal-title">Write a Review</h3>
            <div className="star-input">
              {[1,2,3,4,5].map(s => (
                <button key={s} className={`star-input-btn ${s <= rating ? 'filled' : ''}`} onClick={() => setRating(s)}>
                  {s <= rating ? '★' : '☆'}
                </button>
              ))}
            </div>
            <textarea className="review-textarea" placeholder="Share your experience..." value={comment} onChange={e => setComment(e.target.value)} maxLength={500} />
            <div className="modal-actions">
              <button className="btn-secondary" onClick={onClose}>Cancel</button>
              <button className="btn-primary" onClick={handleSubmit} disabled={!rating || !comment.trim()}>Submit</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
