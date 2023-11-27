// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDsHgXpTOcnEObE4WEflUY-JEkXkuZwuU",
  authDomain: "fsportfolio94.firebaseapp.com",
  projectId: "fsportfolio94",
  storageBucket: "fsportfolio94.appspot.com",
  messagingSenderId: "586564023035",
  appId: "1:586564023035:web:0ed1fed5b4aec0497bf65e",
  measurementId: "G-1GGG7RFH62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);