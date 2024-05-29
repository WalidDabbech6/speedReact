import React from 'react';
import { Navigate,Outlet } from 'react-router-dom';
import { useAuth } from '../../modules/auth/context/AuthContext';

const PrivateRoute = () => {
  const { isAuthenticated } = useAuth();
  return (
    isAuthenticated ? <Outlet />  :  <Navigate to="/auth/login" />
  );
};

export default PrivateRoute;