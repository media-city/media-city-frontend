// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQ2vRqbnBbMwOxhF2PGGUFdSdssSL_tYU",
  authDomain: "media-city-94698.firebaseapp.com",
  projectId: "media-city-94698",
  storageBucket: "media-city-94698.firebasestorage.app",
  messagingSenderId: "371245226035",
  appId: "1:371245226035:web:8fede61ed81db8dc20ab46",
  measurementId: "G-HNWVM0RTE3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
