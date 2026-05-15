'use client';
import { useState } from 'react';

export default function SearchBar({ value, onChange, placeholder }) {
  const [focused, setFocused] = useState(false);
  return (
    <div className="search-bar-wrap">
      <div className={`search-bar ${focused ? 'focused' : ''}`}>
        <span className="search-icon">🔍</span>
        <input
          type="text"
          className="search-input"
          placeholder={placeholder || "Search academies by sport or location..."}
          value={value}
          onChange={e => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          id="search-input"
        />
        {value && <button className="search-clear" onClick={() => onChange('')}>✕</button>}
      </div>
    </div>
  );
}
