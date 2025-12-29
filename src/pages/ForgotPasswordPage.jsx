import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AuthForm.css';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');

    fetch('http://localhost:3001/api/forgot-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })
    .then(res => res.json())
    .then(data => {
      setLoading(false);
      if (data.success) {
        setMessage('If an account with that email exists, a password reset link has been sent.');
      } else {
        setError(data.message || 'An error occurred.');
      }
    })
    .catch(() => {
      setLoading(false);
      setError('Could not connect to the server.');
    });
  };

  return (
    <div className="auth-container">
      <div className="auth-form-wrapper">
        <h2 className="auth-title">Forgot Password</h2>
        <p className="auth-subtitle">Enter your email and we'll send you a link to reset your password.</p>
        
        {message && <p className="auth-success">{message}</p>}
        {error && <p className="auth-error">{error}</p>}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Enter your email" 
              required 
            />
          </div>
          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? 'Sending...' : 'Send Reset Link'}
          </button>
        </form>

        <p className="auth-redirect">
          Remembered your password? <Link to="/login">Back to Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
