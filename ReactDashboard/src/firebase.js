// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsawcIMT4wX5eJ-e9dnUZihjqcw2SxALQ",
  authDomain: "fir-course-1bd9e.firebaseapp.com",
  projectId: "fir-course-1bd9e",
  storageBucket: "fir-course-1bd9e.appspot.com",
  messagingSenderId: "625491955193",
  appId: "1:625491955193:web:e2391474344a3554958128",
  measurementId: "G-MGNLSF77JD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
