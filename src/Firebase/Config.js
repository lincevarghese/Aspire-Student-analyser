import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3odyKyiorXJiHheyNd7x8UhRREvgozvA",
  authDomain: "aspire-b17cf.firebaseapp.com",
  projectId: "aspire-b17cf",
  storageBucket: "aspire-b17cf.appspot.com",
  messagingSenderId: "27237024047",
  appId: "1:27237024047:web:c766769cb34166e48921da",
  measurementId: "G-MBB4ZVPBB2"
};

export const Firebase = firebase.initializeApp(firebaseConfig);