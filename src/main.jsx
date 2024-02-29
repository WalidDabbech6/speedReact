import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Route,
  redirect,
  Routes,
} from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthProvider } from "./modules/auth/context/AuthContext.jsx";
import LoginPage from "./modules/auth/LoginPage.jsx";
import PrivateRoute from "./components/navigation/PrivateRoute.jsx";
import InscriptionPage from "./modules/auth/InscriptionPage.jsx";
import AuthLayout from "./modules/auth/AuthLayout.jsx";
import HomePage from "./modules/home/Home.jsx";
import Footer from "./components/Footer.jsx"
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
  <Router>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Routes>
          <Route
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
          {/* { redirect("/dashboard")}  */}
        </Routes>
      </AuthProvider>
    </QueryClientProvider>
  </Router>
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
