import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Route,
  redirect,
  Routes,
  Navigate,
} from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthProvider, useAuth } from "./modules/auth/context/AuthContext.jsx";
import ContentRoute from "./components/navigation/ContentRoute"
import LoginPage from "./modules/auth/LoginPage.jsx";
import PrivateRoute from "./components/navigation/PrivateRoute.jsx";
import InscriptionPage from "./modules/auth/InscriptionPage.jsx";
import AuthLayout from "./modules/auth/AuthLayout.jsx";
import HomePage from "./modules/home/Home.jsx";
import Footer from "./components/Footer.jsx"
import Payment from "./modules/Payment.jsx";
const queryClient = new QueryClient();
import rootRoutes from './routes.jsx'

console.log(Object.keys(rootRoutes))
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
                        <React.Suspense fallback={<>"Loading"</>}>
  <Router>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Routes>
        {Object.keys(rootRoutes).map((key, i) => <Route key={i} {...rootRoutes[key]}/>)}
        <Route
        path="/"
        element={<Navigate to={rootRoutes.auth.path} replace />}
       />
       <Route element={<>NOTFOUND</>} />
          {/* <Route
            path="/login"
            element={
              <AuthLayout>
                <LoginPage />
              </AuthLayout>
            }
          />
          <Route
            path="/register"
            element={
              <AuthLayout>
                <InscriptionPage />
              </AuthLayout>
            }
          />
             <Route
            path="/home"
            element={
             <HomePage/>
            }
          />
           <Route
            path="/payment"
            element={
             <Payment/>
            }
          /> */}
          {/* { redirect("/dashboard")}  */}
        </Routes>
      </AuthProvider>
    </QueryClientProvider>
  </Router>
  </React.Suspense>
  <a
        href="https://wa.me/2348100000000"
        class=" "
        className="whatsapp_float animate-bounce"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>
  {/* <Footer/> */}
  </>
);
