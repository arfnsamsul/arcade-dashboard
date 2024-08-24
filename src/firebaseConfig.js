// src/firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBkSBNicVnrsAyZao6p3Zoxewv9JMVfy64",
  authDomain: "arcade-dashboard-b931a.firebaseapp.com",
  projectId: "arcade-dashboard-b931a",
  storageBucket: "arcade-dashboard-b931a.appspot.com",
  messagingSenderId: "886322033649",
  appId: "1:886322033649:web:8c126a503a2cf294734a50",
  measurementId: "G-Q0RV4NRTZJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };

