import firebase from "firebase";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAD16kKT3T2CzydbURviXxxuhkzvnK2TS8",
  authDomain: "todoapp-31ded.firebaseapp.com",
  projectId: "todoapp-31ded",
  storageBucket: "todoapp-31ded.appspot.com",
  messagingSenderId: "466872482638",
  appId: "1:466872482638:web:f707b931c82845891afc1f",
  measurementId: "G-9LGGVKJB1Y"
};


//INILIAIZE FIREBASE
firebase.initializeApp(firebaseConfig);

//FIRESTORE
const todofirestore = firebase.firestore();

export { todofirestore };