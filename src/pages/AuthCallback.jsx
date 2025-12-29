import React, { useEffect, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const AuthCallback = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get('token');

    if (token) {
      login(token);
      navigate('/');
      window.location.reload(); // Force a full refresh to update the header
    } else {
      navigate('/login');
    }
  }, [location, navigate, login]);

  return <div style={{paddingTop: '150px', textAlign: 'center'}}>Loading...</div>;
};

export default AuthCallback;
