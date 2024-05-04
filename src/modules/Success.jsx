import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useVerifyPayment from "../hooks/useVerifyPayment";
const Success = () => {
  const [searchParams] = useSearchParams();

  const { mutate, data, isSuccess } = useVerifyPayment();
  const [result, setResult] = useState(false);
  useEffect(() => {
    mutate(searchParams.get("payment_ref"));
    return () => {};
  }, []);

  useEffect(() => {
    if (isSuccess){
        setResult(true)
    }
  
    return () => {
      
    }
  }, [isSuccess])
  

  return (
    <>
      {result && (
        <div className="bg-accent3 p-8 h-screen">
          <div
            class="bg-green-50 border-l-4 border-green-500 text-green-700 p-4 border rounded-md text-start flex justify-between items-center"
            role="alert"
          >
            <div>
              <p class="font-bold p-4">Success Payment</p>
            </div>
            <div className="w-6 h-6 rounded-full bg-accent1 p-[1px]">
              <svg
                fill="#ffffff"
                height="20px"
                width="20px"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 490 490"
                xml:space="preserve"
                stroke="#116600"
                stroke-width="0.0049"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <polygon points="452.253,28.326 197.831,394.674 29.044,256.875 0,292.469 207.253,461.674 490,54.528 "></polygon>{" "}
                </g>
              </svg>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Success;
