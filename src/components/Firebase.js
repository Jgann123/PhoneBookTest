import firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyAXfwp45qDnLaqDdJmE-oLyNpSi_sbrOxU",
    authDomain: "contact-list-d7810.firebaseapp.com",
    projectId: "contact-list-d7810",
    storageBucket: "contact-list-d7810.appspot.com",
    messagingSenderId: "566246548730",
    appId: "1:566246548730:web:b2efc07d0f958b288fd543",
    measurementId: "G-SQMM1X0FTB"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  export default db;