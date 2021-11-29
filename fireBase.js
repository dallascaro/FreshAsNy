// Import the functions you need from the SDKs you need
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {doc, setDoc, getFirestore, collection, getDocs} from "firebase/firestore";
import App from './App';
import inputs from './App.js';
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

const auth = firebase.auth()

//initalize database
const db = getFirestore() // connection to database

// getting a collection in the database from collection ref
const colRef = collection(db, 'Orders') //Fetch info of Orders

//get collection data
getDocs(colRef) // fetches all the documnets from collection 
  .then((snapshot) => {
    console.log(snapshot.docs)
  })

  .catch(err => {
    console.log(err.mesaage)
  })

  // Testing pull of data
  console.log("hello");
  console.log();

  // Add a new document in collection Customers
  const order = {
    color: inputs[2],
    date: inputs[3],
    delivery: inputs[5] ,
    email: 'email' ,
    message: inputs[4],
    product: inputs[0],
    theme: inputs[1]
  }

  console.log(order);
  //const res = await db.collection('Orders').doc('GLrUmUmI8yeVwUTDVJQn').set(order);

  // Add a new document with a generated id.
//const res = await db.collection('cities').add({
  //name: 'Tokyo',
  //country: 'Japan'
//});

//console.log('Added document with ID: ', res.id);

export { auth };
export default getFirestore();