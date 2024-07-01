// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCj35ENakvC-ICQCZEQIcJSrVJWSW-zViw",
  authDomain: "mr-lion-croqueteria.firebaseapp.com",
  projectId: "mr-lion-croqueteria",
  storageBucket: "mr-lion-croqueteria.appspot.com",
  messagingSenderId: "590444249611",
  appId: "1:590444249611:web:283f0a5a128f9dab9b7d0e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)