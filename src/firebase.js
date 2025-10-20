// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Konfigurasi dari Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyAO1ie1PFj8TXaqee12eAg_9JnX-b0X3JQ",
  authDomain: "portfolio-comments-ed288.firebaseapp.com",
  projectId: "portfolio-comments-ed288",
  storageBucket: "portfolio-comments-ed288.firebasestorage.app",
  messagingSenderId: "46101194313",
  appId: "1:46101194313:web:d7c7ff52ec004318ebc198",
  measurementId: "G-BVLBGCZDKT"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
