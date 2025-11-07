import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import './Navbar.css';

function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Watch authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe(); // cleanup listener
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      alert("Signed out successfully!"); // Added popup
      navigate('/'); // Redirect to login
    } catch (err) {
      console.error("Error signing out:", err);
      alert("Error signing out: " + err.message);
    }
  };

  return (
    <nav className="navbar">
      <Link to={user ? "/home" : "/"} className="navbar-logo">
        DEV@Deakin
      </Link>
      <ul className="navbar-links">
        {user ? (
          <>
            <li>
              <span className="navbar-email">Welcome, {user.email}</span>
            </li>
            <li>
              <button onClick={handleSignOut} className="navbar-button">
                Sign Out
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/" className="navbar-link">Login</Link>
            </li>
            <li>
              <Link to="/register" className="navbar-link">Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
