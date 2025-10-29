// lib/firebase.js
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; 
import { getFirestore } from 'firebase/firestore'; 

const firebaseConfig = {
    apiKey: "AIzaSyA521z5DxfFHb5KxMWUP0Gogv7PnF82Kd4",
  authDomain: "flat-and-flatmates-f7413.firebaseapp.com",
  projectId: "flat-and-flatmates-f7413",
  storageBucket: "flat-and-flatmates-f7413.appspot.com",
  messagingSenderId: "349843979688",
  appId: "1:349843979688:web:84fa3f6b9165b467ca319d",
  measurementId: "G-5915SR9W6V"
};

// Initialize Firebase only if it hasn't been initialized yet
const app = !getApps().length 
  ? initializeApp(firebaseConfig) 
  : getApp();

// Initialize the services you're going to use
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;