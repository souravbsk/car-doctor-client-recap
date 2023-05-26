// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADG6-bh3zPCz6HArdaL2-HplnnKvkbUJw",
  authDomain: "car-doctor-recap.firebaseapp.com",
  projectId: "car-doctor-recap",
  storageBucket: "car-doctor-recap.appspot.com",
  messagingSenderId: "545197519669",
  appId: "1:545197519669:web:1bdce0e8edef6ad18f927c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app;