import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import keycloak from './config/keycloak-config';
import DoctorDashboard from './components/DoctorDashboard';
import SecretaryDashboard from './components/SecretaryDashboard';
import AccessDenied from './components/AccessDenied';
import LoginPage from './components/LoginPage';

const ProtectedRoute = ({ role, children }) => {
  if (!keycloak.authenticated) {
    keycloak.login();
    return null;
  }

  if (keycloak.hasRealmRole(role)) {
    return children;
  } else {
    return <Navigate to="/access-denied" />;
  }
};

export const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/doctor-dashboard" element={
        <ProtectedRoute role="Doctor">
          <DoctorDashboard />
        </ProtectedRoute>
      } />
      <Route path="/secretary-dashboard" element={
        <ProtectedRoute role="Secretary">
          <SecretaryDashboard />
        </ProtectedRoute>
      } />
      <Route path="/access-denied" element={<AccessDenied />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  </Router>
);
