// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
import { } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8TVslNNAA_r-b-7QKyFNODWBFixOu4-U",
  authDomain: "social-media-website-39f09.firebaseapp.com",
  databaseURL: "https://social-media-website-39f09-default-rtdb.firebaseio.com",
  projectId: "social-media-website-39f09",
  storageBucket: "social-media-website-39f09.appspot.com",
  messagingSenderId: "861604238799",
  appId: "1:861604238799:web:cc57ff6b9e4fa9f1196eba",
  measurementId: "G-QK42KMZ1P7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(firebase);