 import firebase from 'firebase'
 import firestor from 'firebase/firestore'
 
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBz6danCY91ZlKJ0leMh20r64tZ-xNhlvc",
    authDomain: "geo-ninjas-4126e.firebaseapp.com",
    databaseURL: "https://geo-ninjas-4126e.firebaseio.com",
    projectId: "geo-ninjas-4126e",
    storageBucket: "geo-ninjas-4126e.appspot.com",
    messagingSenderId: "893889685614",
    appId: "1:893889685614:web:acc7d2050f93238f6d5e7f",
    measurementId: "G-5W1M5YMKRF"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebaseApp.firestore()