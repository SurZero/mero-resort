import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBuAGeQQiluKPh23UQUnD_KxOp9nyyLXRQ",
  authDomain: "mero-resort.firebaseapp.com",
  databaseURL: "https://mero-resort.firebaseio.com",
  projectId: "mero-resort",
  storageBucket: "mero-resort.appspot.com",
  messagingSenderId: "174671669938",
  appId: "1:174671669938:web:2a286e5e5e240ffd03f7ab",
  measurementId: "G-7MB85F9903",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
