import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCSITtziaZhj-akqcupgR4vTM64hCwq_mg",
    authDomain: "meel-milaap.firebaseapp.com",
    databaseURL: "https://meel-milaap.firebaseio.com",
    projectId: "meel-milaap",
    storageBucket: "meel-milaap.appspot.com",
    messagingSenderId: "829275923262",
    appId: "1:829275923262:web:0aeda5e7075c7c67f9426f",
    measurementId: "G-DHTH8N7WQC"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;