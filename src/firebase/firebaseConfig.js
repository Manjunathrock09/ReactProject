import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCEHRag_Loz4CGVZS2nj4Dj_F9dJ2ZmPBo",
    authDomain: "workhub-c4f53.firebaseapp.com",
    projectId: "workhub-c4f53",
    storageBucket: "workhub-c4f53.firebasestorage.app",
    messagingSenderId: "831356058032",
    appId: "1:831356058032:web:89b583ae6d7c6e7af2be75"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
