import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppRoutes } from './routes';
import keycloak from './config/keycloak-config';

keycloak.init({ onLoad: 'login-required' }).then(() => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <AppRoutes />
    </React.StrictMode>
  );
});
