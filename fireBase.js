// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; 
import * as firebase from "firebase";
import { getAnalytics } from "firebase/analytics";
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

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app()
}

const auth = firebase.auth()
export {auth};
//const analytics = getAnalytics(app);