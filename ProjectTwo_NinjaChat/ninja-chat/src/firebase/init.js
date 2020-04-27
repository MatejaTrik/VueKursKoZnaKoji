import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyApRes4Aiwf8KtTDjwjaz2HiOIoDNk_7bc",
    authDomain: "ninja-chat-721b9.firebaseapp.com",
    databaseURL: "https://ninja-chat-721b9.firebaseio.com",
    projectId: "ninja-chat-721b9",
    storageBucket: "ninja-chat-721b9.appspot.com",
    messagingSenderId: "1014617249326",
    appId: "1:1014617249326:web:5621e84bd19489c1f531bf",
    measurementId: "G-EHJPJQ4J4T"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebaseApp.firestore()