// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwxkxSngedEs_5hFfqqzFve2nHH1DKx2A",
  authDomain: "smart-deals-2229a.firebaseapp.com",
  projectId: "smart-deals-2229a",
  storageBucket: "smart-deals-2229a.firebasestorage.app",
  messagingSenderId: "247864032874",
  appId: "1:247864032874:web:7fc473fa6fdda4aa155413",
  measurementId: "G-PCQ80G187Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
