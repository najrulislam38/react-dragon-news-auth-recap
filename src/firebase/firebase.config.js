// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5Zp35FmNS250oZq_O3vJ1SLRT0EF9sas",
  authDomain: "the-dragon-news-auth-3dc3f.firebaseapp.com",
  projectId: "the-dragon-news-auth-3dc3f",
  storageBucket: "the-dragon-news-auth-3dc3f.appspot.com",
  messagingSenderId: "159460690747",
  appId: "1:159460690747:web:46a2612c33c7ab2ecf051e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
