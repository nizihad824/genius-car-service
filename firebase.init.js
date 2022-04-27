// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdqDJMNl97xznQzwEFiaE-O5WvcLDesX8",
  authDomain: "genius-car-service-3fdc5.firebaseapp.com",
  projectId: "genius-car-service-3fdc5",
  storageBucket: "genius-car-service-3fdc5.appspot.com",
  messagingSenderId: "19710762990",
  appId: "1:19710762990:web:24763a1a356cca8647b8ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;