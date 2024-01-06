// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_WaEcFpWYnvS4AGFlRT8tWZCRo-r9tEk",
  authDomain: "cardcreate-3113c.firebaseapp.com",
  projectId: "cardcreate-3113c",
  storageBucket: "cardcreate-3113c.appspot.com",
  messagingSenderId: "18065921403",
  appId: "1:18065921403:web:be25d09290d6730b4cd9de",
  measurementId: "G-MN6WKYRKRB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);

export const auth = getAuth(app);
