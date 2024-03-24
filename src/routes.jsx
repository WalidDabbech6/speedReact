import { lazy } from "react";

const AuthLayout = lazy(()=> import ("./modules/auth/AuthLayout"))
const HomePage = lazy(()=> import("./modules/home/Home"))
const Logout = lazy(() =>  import("./modules/auth/Logout"))

export default {
    auth: {
      path: "/auth/*",
      element: <AuthLayout />
    },
    home: {
      path: "/home",
      element: <HomePage />
    },
    logout: {
      path: "/logout",
      element: <Logout />
    },
}  