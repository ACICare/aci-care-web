import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDwSmcuOn5eIRi8HCUPBZlb-jsyYpWa2oU",
  authDomain: "neuro27-43d9f.firebaseapp.com",
  projectId: "neuro27-43d9f",
  storageBucket: "neuro27-43d9f.appspot.com",
  messagingSenderId: "127102141471",
  appId: "1:127102141471:web:945255d08e300bbcec412a"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
