import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDdymStk3b166bXdTkW1IXjHHEjfKclU2o",
    authDomain: "my-first-errand.firebaseapp.com",
    projectId: "my-first-errand",
    storageBucket: "my-first-errand.appspot.com",
    messagingSenderId: "3202484325",
    appId: "1:3202484325:web:a743b141c3384f7fc01e8c",
    measurementId: "G-9TKC0HRH38"
  };
  
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export { db }