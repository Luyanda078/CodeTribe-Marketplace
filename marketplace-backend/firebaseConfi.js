// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBHE4oGAMqQ-uwCCiE7-5q3ojYZ-kyv8cg",
  authDomain: "codetribe-marketplace-b15ea.firebaseapp.com",
  projectId: "codetribe-marketplace-b15ea",
  storageBucket: "codetribe-marketplace-b15ea.firebasestorage.app",
  messagingSenderId: "432593504359",
  appId: "1:432593504359:web:a8446a14d420d4ae5a6cc2",
  measurementId: "G-3K62638XF6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);