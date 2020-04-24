import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAFLE-RAI43Jhm-mL55NOlZEj3eIMmsdwg",
    authDomain: "ninja-smoothies-1ec02.firebaseapp.com",
    databaseURL: "https://ninja-smoothies-1ec02.firebaseio.com",
    projectId: "ninja-smoothies-1ec02",
    storageBucket: "ninja-smoothies-1ec02.appspot.com",
    messagingSenderId: "97550789903",
    appId: "1:97550789903:web:33cacbfecccb8f9ca3227a",
    measurementId: "G-VSLZJPPQ6P"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  //firebaseApp.firestore().settings({ timestampsInSnapshots: true })
  firebase.analytics();

  //export firestore database 
  export default firebaseApp.firestore()