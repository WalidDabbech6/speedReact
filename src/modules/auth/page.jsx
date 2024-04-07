import { lazy } from "react";
const LoginPage = lazy(()=> import ("./LoginPage"));
const InscriptionPage = lazy(()=> import ("./InscriptionPage"));

 
const authenticationRoutes = {
    login: {
      path: "login",
      element: <LoginPage />,
    },
    inscription: {
        path: "register",
        element: <InscriptionPage />
      },
}  

export default  authenticationRoutes;
   
