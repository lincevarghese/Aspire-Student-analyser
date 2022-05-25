import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3odyKyiorXJiHheyNd7x8UhRREvgozvA",
  authDomain: "aspire-b17cf.firebaseapp.com",
  projectId: "aspire-b17cf",
  storageBucket: "aspire-b17cf.appspot.com",
  messagingSenderId: "27237024047",
  appId: "1:27237024047:web:c766769cb34166e48921da",
  measurementId: "G-MBB4ZVPBB2",
  databaseURL:
    "https://aspire-b17cf-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export const storage = getStorage(app);
export const store=getFirestore(app);

