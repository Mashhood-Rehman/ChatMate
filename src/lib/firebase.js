import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chatemate-75845.firebaseapp.com",
  projectId: "chatemate-75845",
  storageBucket: "chatemate-75845.appspot.com",
  messagingSenderId: "229235811107",
  appId: "1:229235811107:web:a2827f93de9bed28e72296"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()