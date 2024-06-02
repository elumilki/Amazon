import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCI6D-iXkc8a3ncBduXHWVIhvmpKs_84Rw",
  authDomain: "clone-e8f26.firebaseapp.com",
  projectId: "clone-e8f26",
  storageBucket: "clone-e8f26.appspot.com",
  messagingSenderId: "316090125110",
  appId: "1:316090125110:web:6002b4d217456e59ba4197",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
