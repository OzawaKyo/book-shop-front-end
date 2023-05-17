// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getStorage , ref } from 'firebase/storage';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBS6uHusW3Vu681U5r2qYCcAkji_u1V_Rs",
  authDomain: "book-shop-a252c.firebaseapp.com",
  projectId: "book-shop-a252c",
  storageBucket: "book-shop-a252c.appspot.com",
  messagingSenderId: "959045504455",
  appId: "1:959045504455:web:340248a468e97a13f09de2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
export const storageRef = ref(storage);