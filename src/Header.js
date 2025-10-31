import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
import "./App.css"; // we put header styles inside App.css

export default function Header() {
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      alert("Signed out successfully!");
    } catch (error) {
      alert("Error signing out.");
    }
  };

  return (
    <header className="header">
      <h2 className="header-title">Welcome to DEV@Deakin</h2>
      <button className="signout-button" onClick={handleSignOut}>
        Sign Out
      </button>
    </header>
  );
}
