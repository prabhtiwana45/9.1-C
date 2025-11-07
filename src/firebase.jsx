// src/firebase.js
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJuOwIPrjPeAKlEK8uZu6XIZpnqQSqHe4",
  authDomain: "myfirebase1-c80b5.firebaseapp.com",
  projectId: "myfirebase1-c80b5",
  storageBucket: "myfirebase1-c80b5.appspot.com",
  messagingSenderId: "731118554549",
  appId: "1:731118554549:web:680ffae6e53b78368b1dfc"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, app };
