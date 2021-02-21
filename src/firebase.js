import firebase from 'firebase'
var firebaseApp=firebase.initializeApp({

    apiKey: "AIzaSyDZOHOb0KMSj3flcppJGVWG3qZJa39-zeg",
    authDomain: "contact-ec01b.firebaseapp.com",
    databaseURL: "https://contact-ec01b-default-rtdb.firebaseio.com",
    projectId: "contact-ec01b",
    storageBucket: "contact-ec01b.appspot.com",
    messagingSenderId: "249227316990",
    appId: "1:249227316990:web:43cb0825f95a65818d9faf",
    measurementId: "G-QSYVQ89TPT"

  
  // Initialize Firebase
 })

 var db=firebaseApp.firestore()

 export {db}