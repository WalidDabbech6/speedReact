import { lazy } from "react";

const HomePage = lazy(()=> import("./modules/home/Home"))
const RideHistoryPage = lazy(()=> import("./modules/home/RideHistory"))
const PaymentPage = lazy(()=> import("./modules/Payment"))
const SuccessPage = lazy(()=> import("./modules/Success"))
const FailPage = lazy(()=> import("./modules/Fail"))

const Logout = lazy(() =>  import("./modules/auth/Logout"))

export default {
    home: {
      path: "/home",
      component: <HomePage />
    },
    rideHistory:{
      path:"/ride-history",
      component:<RideHistoryPage/>
    },
    payment:{
      path:"/payment/:orderId",
      component:<PaymentPage/>
    },
    success:{
      path:"/success",
      component:<SuccessPage/>
    },
    fail:{
      path:"/fail",
      component:<FailPage/>
    },
    logout: {
      path: "/logout",
      component: <Logout />
    },
}  