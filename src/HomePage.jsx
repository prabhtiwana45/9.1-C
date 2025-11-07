import React from "react";
import "./App.css";

function HomePage() {
  return (
    <div className="home-wrapper">
      <div className="home-card">
        <h1 className="home-title">
          Welcome to <span className="brand">DEV@Deakin</span>
        </h1>
        <p className="home-message">
          We're glad to have you back. Explore your dashboard, check your profile, or simply browse new updates.
        </p>
      </div>
    </div>
  );
}

export default HomePage;
