
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyD5ErccjWFgECPw-lGOsoMiEAMMq6AZJyo",
  authDomain: "chat-6f70a.firebaseapp.com",
  projectId: "chat-6f70a",
  storageBucket: "chat-6f70a.appspot.com",
  messagingSenderId: "139425224312",
  appId: "1:139425224312:web:3262e34a15679b21f9ff8d",
  measurementId: "G-LE6N09LM1E"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)
