import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage, getStorege } from 'firebase/storage';

export const firebaseConfig = {
  apiKey: 'AIzaSyCM2nI3dMBV6xyDleKOyqmQuBzJbqE1ukM',
  authDomain: 'e-shop-a6c0a.firebaseapp.com',
  projectId: 'e-shop-a6c0a',
  storageBucket: 'e-shop-a6c0a.appspot.com',
  messagingSenderId: '500910882118',
  appId: '1:500910882118:web:c589329f7360bd54a03947',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
