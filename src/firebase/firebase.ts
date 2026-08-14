import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyABYK1-6JLP1AuC5Xs8_YfUhQddD4QMSK8",
  authDomain: "aci-care-fb.firebaseapp.com",
  projectId: "aci-care-fb",
  storageBucket: "aci-care-fb.firebasestorage.app",
  messagingSenderId: "625991748526",
  appId: "1:625991748526:web:b5563f6305577c8d37163f",
  measurementId: "G-4KGJJ3GKDL"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);