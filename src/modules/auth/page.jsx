import { lazy } from "react";
import {combinePathRoutes} from "../helpers/RouteHelpers"
const LoginPage = lazy(()=> import ("./LoginPage"))
const InscriptionPage = lazy(()=> import ("./InscriptionPage"))
import baseRoutes from "../../routes"

 
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

export default  authenticationRoutes
   
