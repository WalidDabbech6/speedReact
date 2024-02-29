import React from 'react';
import { Route, redirect } from 'react-router-dom';
import { useAuth } from '../../modules/auth/context/AuthContext';

const PrivateRoute = ({ element: Component, ...rest }) => {
  const { isAuthenticated } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : redirect("/login")
      }
    />
  );
};

export default PrivateRoute;