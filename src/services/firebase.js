// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD1Myqx6wan3mRvEDeLYpMVsxcE5ROekcg",
  authDomain: "binar-full-stack-web-academy.firebaseapp.com",
  projectId: "binar-full-stack-web-academy",
  storageBucket: "binar-full-stack-web-academy.appspot.com",
  messagingSenderId: "47775109673",
  appId: "1:47775109673:web:c9e9636cb51349ee2ac238",
  measurementId: "G-3E7H6LPM6F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
