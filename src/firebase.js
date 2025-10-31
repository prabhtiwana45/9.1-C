// Firebase setup file
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDJuOwIPrjPeAKlEK8uZu6XIZpnqQSqHe4",
  authDomain: "myfirebase1-c80b5.firebaseapp.com",
  projectId: "myfirebase1-c80b5",
  storageBucket: "myfirebase1-c80b5.firebasestorage.app",
  messagingSenderId: "731118554549",
  appId: "1:731118554549:web:680ffae6e53b78368b1dfc"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
