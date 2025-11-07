import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/home');
    } catch (error) {
      setMessage('Login failed — please check your details.');
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleLogin}>
        <h1>Login to Your Account</h1>

        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {message && <p className="error-message">{message}</p>}

        <button type="submit" className="auth-button">Log In</button>

        <p className="auth-bottom-text">
          Don’t have an account? <Link to="/register" className="auth-link">Create one</Link>
        </p>
      </form>
    </div>
  );
}

export default LoginPage;
