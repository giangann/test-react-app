import firebase from "firebase/app";
import "firebase/firestore"; 
import 'firebase/auth'
import 'firebase/storage'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJutrVLIwWgtbEz6vq09V2Bu-LMEezXrk",
  authDomain: "testreactapp-5ae0b.firebaseapp.com",
  projectId: "testreactapp-5ae0b",
  storageBucket: "testreactapp-5ae0b.appspot.com",
  messagingSenderId: "249200920587",
  appId: "1:249200920587:web:fab1e745af19cf24761f0e",
  measurementId: "G-QTCKYG5V38"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore()

export default db;