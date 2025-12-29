import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import './AuthForm.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    fetch('http://localhost:3001/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
    .then(res => res.json())
    .then(data => {
      setLoading(false);
      if (data.token) {
        login(data.token);
        navigate('/');
        window.location.reload();
      } else {
        setError(data.message || 'Login failed.');
      }
    })
    .catch(err => {
      setLoading(false);
      setError('An error occurred.');
    });
  };

  const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:3001/auth/google';
  };

  return (
    <div className="auth-container">
      <div className="auth-form-wrapper">
        <h2 className="auth-title">Welcome Back</h2>
        <p className="auth-subtitle">Please enter your details to sign in.</p>
        <button onClick={handleGoogleLogin} className="google-btn">
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google icon" />
          Sign in with Google
        </button>
        <div className="auth-divider"><span>OR</span></div>
        <form onSubmit={handleLogin} className="auth-form">
          {error && <p className="auth-error">{error}</p>}
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" required />
          </div>
          <Link to="/forgot-password" className="forgot-password">Forgot password?</Link>
          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>
        <p className="auth-redirect">
          Don't have an account? <Link to="/register">Sign up for free</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
