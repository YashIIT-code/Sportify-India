'use client';
import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useAuth } from './AuthContext';
import { getUserFavorites, addFavorite as addFav, removeFavorite as removeFav } from '../lib/firestore';

const FavoritesContext = createContext(null);

export function FavoritesProvider({ children }) {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (user) {
      getUserFavorites(user.uid).then(setFavorites).catch(console.error);
    } else {
      setFavorites([]);
    }
  }, [user]);

  const addFavorite = useCallback(async (academyId) => {
    setFavorites(prev => [...prev, academyId]);
    if (user) await addFav(user.uid, academyId);
  }, [user]);

  const removeFavorite = useCallback(async (academyId) => {
    setFavorites(prev => prev.filter(id => id !== academyId));
    if (user) await removeFav(user.uid, academyId);
  }, [user]);

  const toggleFavorite = useCallback(async (academyId) => {
    if (favorites.includes(academyId)) {
      await removeFavorite(academyId);
    } else {
      await addFavorite(academyId);
    }
  }, [favorites, addFavorite, removeFavorite]);

  const isFavorite = useCallback((academyId) => favorites.includes(academyId), [favorites]);

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const ctx = useContext(FavoritesContext);
  if (!ctx) throw new Error('useFavorites must be used within FavoritesProvider');
  return ctx;
}
