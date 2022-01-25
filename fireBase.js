// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
//import {getFirestore} from "firebase/firestore";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
//import database from '@react-native-firebase/database';
import { getDatabase, ref, set } from "firebase/database";
//import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIuaKJh0c6LCaVQa40plQEPslysssLisU",
  authDomain: "freshasny-46ed5.firebaseapp.com",
  projectId: "freshasny-46ed5",
  storageBucket: "freshasny-46ed5.appspot.com",
  messagingSenderId: "836606517709",
  appId: "1:836606517709:web:c668bcdeb0013b7cbc6484",
  measurementId: "G-BCW25NPMB5"
};
// Initialize Firebase
let app;
if (firebase.apps.length === 0){
  app = firebase.initializeApp(firebaseConfig);
}else {
  app = firebase.app()
}

// Authentication
const auth = firebase.auth()

// Real Time Database
const db = getFirestore(app);

// Function to write data for a user
function writeUserData(email, product, theme, color, date, message, transportation ) {
  set(ref(db, 'Users' + email), {
    email: email,
    product: product,
    theme: theme,
    color: color,
    date: date,
    message: message,
    delivery: transportation
  });
}


export {auth, writeUserData, db};
export default getFirestore();