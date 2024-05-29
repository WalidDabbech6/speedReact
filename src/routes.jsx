import { lazy } from "react";

const AuthLayout = lazy(()=> import ("./modules/auth/AuthLayout"))


export default {
    auth: {
      path: "/auth/*",
      element: <AuthLayout />
    },
}  