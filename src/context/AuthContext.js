'use client';
import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { signInWithGoogle, logOut, onAuthChange } from '../lib/auth';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthChange((u) => {
      setUser(u);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const login = useCallback(async () => {
    try {
      const u = await signInWithGoogle();
      setUser(u);
      return u;
    } catch (err) {
      console.error('Login failed:', err);
      throw err;
    }
  }, []);

  const logout = useCallback(async () => {
    await logOut();
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, loading, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
