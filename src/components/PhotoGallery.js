'use client';
import { useState, useRef, useEffect } from 'react';

export default function PhotoGallery({ images }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const handleScroll = () => setActiveIndex(Math.round(el.scrollLeft / el.clientWidth));
    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="detail-gallery">
      <div className="detail-gallery-scroll" ref={scrollRef}>
        {images.map((img, i) => (
          <img key={i} src={img} alt={`Gallery ${i + 1}`} className="detail-gallery-img" loading="lazy" />
        ))}
      </div>
      <div className="detail-gallery-dots">
        {images.map((_, i) => (
          <div key={i} className={`gallery-dot ${i === activeIndex ? 'active' : ''}`} />
        ))}
      </div>
    </div>
  );
}
