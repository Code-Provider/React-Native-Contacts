import * as firebase from "firebase";

// Optionally import the services that you want to use
import "firebase/auth";
import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyBU4nr_VEyAh5FinXM8rKgOdI3AbuRwCUQ',
  authDomain: 'contacts-1bc1a.firebaseapp.com',
  databaseURL: 'https://contacts-1bc1a-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'contacts-1bc1a',
  storageBucket: 'contacts-1bc1a.appspot.com',
  messagingSenderId: '252460536349',

};

if (!firebase.apps.length) {
  //initializing with the config object
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth(); 
const database = firebase.database  ;  

export {auth, database} ; 