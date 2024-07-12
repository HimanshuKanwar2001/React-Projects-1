import firebase from 'firebase/app';
import 'firebase/firestore';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCXspSxj1PeKo_RpF8qASXarNS8VpF_mvo",
  authDomain: "react-hooks-blog-7ff8b.firebaseapp.com",
  projectId: "react-hooks-blog-7ff8b",
  storageBucket: "react-hooks-blog-7ff8b.appspot.com",
  messagingSenderId: "724409432321",
  appId: "1:724409432321:web:86aad905d220b03e308300"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const firestore=firebase.firestore();