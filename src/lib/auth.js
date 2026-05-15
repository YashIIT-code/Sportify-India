import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, googleProvider, db, useMockData } from './firebase';

export async function signInWithGoogle() {
  if (useMockData) {
    const mockUser = {
      uid: 'mock_user_1',
      displayName: 'Rahul Sharma',
      email: 'rahul.sharma@gmail.com',
      photoURL: 'https://ui-avatars.com/api/?name=Rahul+Sharma&background=0D9F6E&color=fff&size=128'
    };
    localStorage.setItem('sportify_user', JSON.stringify(mockUser));
    return mockUser;
  }

  const result = await signInWithPopup(auth, googleProvider);
  const user = result.user;

  // Create/update user doc in Firestore
  const userRef = doc(db, 'users', user.uid);
  const userSnap = await getDoc(userRef);
  if (!userSnap.exists()) {
    await setDoc(userRef, {
      name: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      savedAcademies: [],
      createdAt: new Date().toISOString()
    });
  }

  return user;
}

export async function logOut() {
  if (useMockData) {
    localStorage.removeItem('sportify_user');
    return;
  }
  await signOut(auth);
}

export function onAuthChange(callback) {
  if (useMockData) {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('sportify_user') : null;
    if (saved) callback(JSON.parse(saved));
    else callback(null);
    return () => {};
  }
  return onAuthStateChanged(auth, callback);
}
