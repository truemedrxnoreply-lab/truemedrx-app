import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = () => {
  return (
    <div className="spinner-overlay">
      <div className="spinner-content">
        <img src="/images/logo.jpeg" alt="Loading..." className="spinner-logo" />
        <div className="spinner-container"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
