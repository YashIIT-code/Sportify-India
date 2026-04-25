import { collection, getDocs, doc, getDoc, query, where, orderBy, addDoc, updateDoc, arrayUnion, arrayRemove, serverTimestamp } from 'firebase/firestore';
import { db, useMockData } from './firebase';
import { academies as mockAcademies, getSportIcon, getSportColor, sports, priceRanges } from '../data/academies';
import { reviews as mockReviews, getReviewsByAcademyId as getMockReviews } from '../data/reviews';

// ========== ACADEMIES ==========

export async function getAllAcademies() {
  if (useMockData) return mockAcademies;
  const snap = await getDocs(collection(db, 'academies'));
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

export async function getAcademyById(id) {
  if (useMockData) return mockAcademies.find(a => a.id === id) || null;
  const snap = await getDoc(doc(db, 'academies', id));
  return snap.exists() ? { id: snap.id, ...snap.data() } : null;
}

export async function getAcademiesBySport(sport) {
  if (useMockData) return mockAcademies.filter(a => a.sport === sport);
  const q = query(collection(db, 'academies'), where('sport', '==', sport));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

// ========== REVIEWS ==========

export async function getReviewsByAcademyId(academyId) {
  if (useMockData) return getMockReviews(academyId);
  const q = query(collection(db, 'reviews'), where('academyId', '==', academyId), orderBy('createdAt', 'desc'));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

export async function addReview(reviewData) {
  if (useMockData) return { id: `r_${Date.now()}`, ...reviewData };
  const docRef = await addDoc(collection(db, 'reviews'), { ...reviewData, createdAt: serverTimestamp() });
  return { id: docRef.id, ...reviewData };
}

// ========== FAVORITES ==========

export async function getUserFavorites(userId) {
  if (useMockData) {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('sportify_favorites') : null;
    return saved ? JSON.parse(saved) : [];
  }
  const snap = await getDoc(doc(db, 'users', userId));
  return snap.exists() ? (snap.data().savedAcademies || []) : [];
}

export async function addFavorite(userId, academyId) {
  if (useMockData) {
    const favs = JSON.parse(localStorage.getItem('sportify_favorites') || '[]');
    const updated = [...favs, academyId];
    localStorage.setItem('sportify_favorites', JSON.stringify(updated));
    return updated;
  }
  await updateDoc(doc(db, 'users', userId), { savedAcademies: arrayUnion(academyId) });
}

export async function removeFavorite(userId, academyId) {
  if (useMockData) {
    const favs = JSON.parse(localStorage.getItem('sportify_favorites') || '[]');
    const updated = favs.filter(id => id !== academyId);
    localStorage.setItem('sportify_favorites', JSON.stringify(updated));
    return updated;
  }
  await updateDoc(doc(db, 'users', userId), { savedAcademies: arrayRemove(academyId) });
}

export { getSportIcon, getSportColor, sports, priceRanges };
