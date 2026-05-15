'use client';
import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useAuth } from './AuthContext';
import { getUserFavorites, addFavorite as addFav, removeFavorite as removeFav } from '../lib/firestore';

const FavoritesContext = createContext(null);

export function FavoritesProvider({ children }) {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    getUserFavorites(user ? user.uid : 'anon').then(setFavorites).catch(console.error);
  }, [user]);

  const addFavorite = useCallback(async (academyId) => {
    setFavorites(prev => [...prev, academyId]);
    await addFav(user ? user.uid : 'anon', academyId);
  }, [user]);

  const removeFavorite = useCallback(async (academyId) => {
    setFavorites(prev => prev.filter(id => id !== academyId));
    await removeFav(user ? user.uid : 'anon', academyId);
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
