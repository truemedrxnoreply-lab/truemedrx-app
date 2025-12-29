import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext'; // Import AuthContext
import './AuthForm.css';

const ProfilePage = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext); // Use user and logout from context

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!user) {
    // This should not happen if routes are protected, but as a fallback
    navigate('/login');
    return null;
  }

  return (
    <div className="auth-container">
      <div className="auth-form-wrapper">
        <h2 className="auth-title">My Profile</h2>
        {user.profilePicture && 
          <img src={user.profilePicture} alt="Profile" style={{width: '100px', height: '100px', borderRadius: '50%', margin: '20px auto'}} />
        }
        <div style={{textAlign: 'left', margin: '20px 0'}}>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>

        <div style={{marginTop: '30px'}}>
          <h3>Order History</h3>
          <p>You have no past orders.</p>
        </div>

        <button onClick={handleLogout} className="submit-btn" style={{backgroundColor: '#dc3545', marginTop: '30px'}}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
