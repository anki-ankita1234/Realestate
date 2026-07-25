// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3grn122CCetFs5cXaL9fZboGC-TOguZ8",
  authDomain: "realestate-fe9a8.firebaseapp.com",
  projectId: "realestate-fe9a8",
  storageBucket: "realestate-fe9a8.firebasestorage.app",
  messagingSenderId: "1015127935608",
  appId: "1:1015127935608:web:b0af9d5c99cb2566c5bb8d",
  measurementId: "G-T7NF05085H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db =getFirestore()


