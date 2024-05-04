import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('token') ?  true :false);
  const [currentUser,setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')))
  const authentication = (user) => {
    setIsAuthenticated(true);
    setCurrentUser(user)
  };

  const logout = () => {
    setIsAuthenticated(false);
    // Clear user data and token from local storage or session storage
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, authentication, logout,currentUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
