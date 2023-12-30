// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOjHFcrKeLLP79kCdIYPbJFSsxUGGGro4",
  authDomain: "library-management-9dba1.firebaseapp.com",
  projectId: "library-management-9dba1",
  storageBucket: "library-management-9dba1.appspot.com",
  messagingSenderId: "701320315251",
  appId: "1:701320315251:web:da77027f05e480f043c506"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app