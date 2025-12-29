import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import './AuthForm.css';

const ResetPasswordPage = () => {
  const { token } = useParams(); // Gets the token from the URL
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    setLoading(true);
    setError('');
    setMessage('');

    fetch('http://localhost:3001/api/reset-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token, password }),
    })
    .then(res => res.json())
    .then(data => {
      setLoading(false);
      if (data.success) {
        setMessage('Your password has been reset successfully! You can now log in.');
        setTimeout(() => navigate('/login'), 3000);
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
        <h2 className="auth-title">Reset Password</h2>
        <p className="auth-subtitle">Enter your new password below.</p>
        
        {message && <p className="auth-success">{message}</p>}
        {error && <p className="auth-error">{error}</p>}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="input-group">
            <label htmlFor="password">New Password</label>
            <input 
              type="password" 
              id="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Enter new password" 
              required 
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">Confirm New Password</label>
            <input 
              type="password" 
              id="confirm-password" 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
              placeholder="Confirm new password" 
              required 
            />
          </div>
          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? 'Resetting...' : 'Reset Password'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
