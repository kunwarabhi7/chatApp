// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwkPuJyiPB3zQvagReaxslVVxNtpLekDQ",
  authDomain: "chatapp-a4f79.firebaseapp.com",
  projectId: "chatapp-a4f79",
  storageBucket: "chatapp-a4f79.appspot.com",
  messagingSenderId: "224380620959",
  appId: "1:224380620959:web:e98c01aff0a271008e52aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)