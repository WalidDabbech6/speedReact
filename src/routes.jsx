import { lazy } from "react";

const AuthLayout = lazy(()=> import ("./modules/auth/AuthLayout"))
const HomePage = lazy(()=> import("./modules/home/Home"))
const RideHistoryPage = lazy(()=> import("./modules/home/RideHistory"))
const PaymentPage = lazy(()=> import("./modules/Payment"))

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
    rideHistory:{
      path:"/ride-history",
      element:<RideHistoryPage/>
    },
    payment:{
      path:"/payment",
      element:<PaymentPage/>
    },
    logout: {
      path: "/logout",
      element: <Logout />
    },
}  