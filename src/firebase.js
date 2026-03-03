// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = { 
  apiKey: "AIzaSyAbw93M1uHOIaBXLDqVHXQOKc3Oe5kwwzY",
  authDomain: "unknown-project1.firebaseapp.com",
  projectId: "unknown-project1",
  storageBucket: "unknown-project1.firebasestorage.app",
  messagingSenderId: "526382286540",
  appId: "1:526382286540:web:fd0d9a750a481f4b05e469",
  measurementId: "G-FXWDVNF96C"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app); 


export default app;