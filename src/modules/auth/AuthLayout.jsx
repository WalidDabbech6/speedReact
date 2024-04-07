import React, { useEffect } from "react";
import pages from "./page";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import rootRoutes from "../../routes";
import { useAuth } from "./context/AuthContext";
const AuthLayout = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate(rootRoutes.home.path);
    }
  }, [isAuthenticated]);

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Background image */}
      <div
        className="md:w-1/2 h-full bg-cover bg-unset md:bg-unset"
        style={{ backgroundImage: "url('/background.jpg')" }}
      ></div>

      {/* Form container */}
      <div className="md:w-1/2 flex justify-center items-center bg-accent3">
        <Routes>
          {/* <Route path={rootRoutes.auth.path} element={rootRoutes.auth.element}> */}
          {Object.keys(pages).map((key, i) => (
            <Route key={i} {...pages[key]} />
          ))}
          <Route
            path="*"
            element={<Navigate to={pages.login.path} replace />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default AuthLayout;
