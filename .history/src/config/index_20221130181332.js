// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
  getRedirectResult,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  deleteUser,
} from "firebase/auth";

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfrfw6chi091bWLqJvanxAUTxgJ5XqEu0",
  authDomain: "random-people-app.firebaseapp.com",
  projectId: "random-people-app",
  storageBucket: "random-people-app.appspot.com",
  messagingSenderId: "1097586453252",
  appId: "1:1097586453252:web:4575afe7663a752ae77e51",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Setup Google auth provider
const provider = new GoogleAuthProvider();

const auth = getAuth();

export {
  app,
  provider,
  auth,
  signInWithRedirect,
  getRedirectResult,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  deleteUser,
};
