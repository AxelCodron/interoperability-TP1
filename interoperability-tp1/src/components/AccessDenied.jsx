import React from 'react';
import { useNavigate } from 'react-router-dom';

const AccessDenied = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/login'); // Redirect to home or login page
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20%' }}>
      <h2>Access Denied</h2>
      <p>You do not have permission to view this page.</p>
      <button onClick={handleGoBack} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Go Back
      </button>
    </div>
  );
};

export default AccessDenied;
