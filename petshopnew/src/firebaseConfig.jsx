
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

// Firebase konfiguracijske postavke
const firebaseConfig = {
    apiKey: "AIzaSyBVdM_jo7CJRHZt82VYxxaVsyZvfwrFvZk",
    authDomain: "petshop-b28df.firebaseapp.com",
    projectId: "petshop-b28df",
    storageBucket: "petshop-b28df.appspot.com",
    messagingSenderId: "1969092891",
    appId: "1:1969092891:web:d8a29f1d5dad48fcc13bbe",
    measurementId: "G-XWSLZ0PY1Z"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
