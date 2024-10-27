import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import keycloak from '../config/keycloak-config';

const LoginPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // If already authenticated, navigate to the dashboard or desired page
    if (keycloak.authenticated) {
      navigate('/doctor-dashboard');
    }
  }, []);

  const handleLogin = () => {
    keycloak.login(); // Initiates Keycloak login
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20%' }}>
      <h2>Welcome to the Application</h2>
      <p>Please log in to access your account.</p>
      <button onClick={handleLogin} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Log In with Keycloak
      </button>
    </div>
  );
};

export default LoginPage;
