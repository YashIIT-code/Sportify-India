'use client';
import { AuthProvider } from '../context/AuthContext';
import { FavoritesProvider } from '../context/FavoritesContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ClientProviders({ children }) {
  return (
    <AuthProvider>
      <FavoritesProvider>
        <Navbar />
        <main className="main-content">{children}</main>
        <Footer />
      </FavoritesProvider>
    </AuthProvider>
  );
}
