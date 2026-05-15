import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">🏆</span>
          <h3>Sportify India</h3>
          <p>Discover the best sports academies near you in Delhi NCR</p>
        </div>
        <div className="footer-links">
          <div className="footer-col">
            <h4>Quick Links</h4>
            <Link href="/">Home</Link>
            <Link href="/academies">Academies</Link>
            <Link href="/profile">Profile</Link>
          </div>
          <div className="footer-col">
            <h4>Sports</h4>
            <Link href="/academies?sport=Football">Football</Link>
            <Link href="/academies?sport=Cricket">Cricket</Link>
            <Link href="/academies?sport=Tennis">Tennis</Link>
            <Link href="/academies?sport=Badminton">Badminton</Link>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <span>support@sportifyindia.in</span>
            <span>New Delhi, India</span>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Sportify India. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
