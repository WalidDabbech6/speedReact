import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useGetBookingOrder from "../hooks/useGetBookingOrder";
import useMakePayment from "../hooks/useMakePayment";

import RideHistoryCard from "./home/RideHistoryCard";
const Payment = () => {
  const params = useParams();
  const { mutate,  data } =
    useGetBookingOrder();
    
  const {pay} = useMakePayment();
  useEffect(() => {
      if (params.orderId) {
        mutate(params.orderId);
      }

      return () => {};
    }, [params]);


  return (
    <div className="bg-accent3 flex flex-col gap-8 p-8 h-screen align-center">
      {data && (
        <RideHistoryCard
          ride={data?.ride}
          bookingTime={data?.booking_time}
          price={data?.price}
          date={data?.date}
          createdAt={data?.created_at}
          payed={data?.payed}
        />
      )}

      {data?.payed === false && (
        <button onClick={()=>{pay({orderId:params.orderId})}} className="mx-auto bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full md:w-1/2 h-12">
          Confirm payment
        </button>
      )}
    </div>
  );
};

export default Payment;
