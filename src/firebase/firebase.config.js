// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBda4wJK6rPCkwUkK9mAo_I20vo_QmZN-I",
  authDomain: "auth-integration-private-5b409.firebaseapp.com",
  projectId: "auth-integration-private-5b409",
  storageBucket: "auth-integration-private-5b409.appspot.com",
  messagingSenderId: "424828668375",
  appId: "1:424828668375:web:a3f195a6680ab64664a392",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
