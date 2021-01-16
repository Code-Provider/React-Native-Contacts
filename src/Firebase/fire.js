import * as firebase from "firebase";

// Optionally import the services that you want to use
import "firebase/auth";
import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDLi7nVl9jPTs-yUGUlalT1TTZpZrNxvFI",
  authDomain: "contacts-cdafc.firebaseapp.com",
  projectId: "contacts-cdafc",
  storageBucket: "contacts-cdafc.appspot.com",
  messagingSenderId: "649834157282",
  appId: "1:649834157282:web:be6cf1eaff9a0557d9babb",
  databaseURL: "https://contacts-cdafc-default-rtdb.firebaseio.com"
};

if (!firebase.apps.length) {
  //initializing with the config object
  firebase.initializeApp(firebaseConfig);
}


const fb = firebase ; 


export {fb} ; 