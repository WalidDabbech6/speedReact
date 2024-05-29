import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthProvider } from "./modules/auth/context/AuthContext.jsx";
const queryClient = new QueryClient();
import rootRoutes from "./routes.jsx";
import privateRoutes from "./privateRoutes.jsx"
import PrivateRoute from "./components/navigation/PrivateRoute.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <React.Suspense fallback={<>"Loading"</>}>
      <Router>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <Routes>
            <Route element={<PrivateRoute />}>
            {Object.keys(privateRoutes).map((key, i) => (
          <Route
            key={i}
            path={privateRoutes[key].path}
            element={privateRoutes[key].component}
          />
        ))}
      </Route>
              {Object.keys(rootRoutes).map((key, i) => (
                <Route key={i} {...rootRoutes[key]} />
              ))}
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
      className="whatsapp_float animate-bounce"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fa fa-whatsapp whatsapp-icon"></i>
    </a>
    {/* <Footer/> */}
  </>
);
