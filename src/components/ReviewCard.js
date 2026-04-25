export default function ReviewCard({ review }) {
  const stars = Array.from({ length: 5 }, (_, i) => i < review.rating ? '★' : '☆');
  return (
    <div className="review-card">
      <div className="review-header">
        <span className="review-avatar">{review.userAvatar}</span>
        <div>
          <div className="review-author">{review.userName}</div>
          <div className="review-date">{new Date(review.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</div>
        </div>
      </div>
      <div className="review-stars">{stars.map((s, i) => <span key={i}>{s}</span>)}</div>
      <div className="review-text">{review.comment}</div>
    </div>
  );
}
