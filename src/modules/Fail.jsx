import React from "react";
import { useSearchParams } from "react-router-dom";

const Fail = () => {

const [searchParams] = useSearchParams()
  return (
    <div className="bg-accent3 p-8 h-screen">
      <div
        class="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 border rounded-md text-start flex justify-between items-center"
        role="alert"
      >
        <div>
        <p class="font-bold p-4">Fail Payment</p>
        </div>
        <div className="w-6 h-6 rounded-full bg-[#cc0000] p-[4px]">
                    <svg
                      fill="#ffffff"
                      height="15px"
                      width="15px"
                      version="1.1"
                      id="Capa_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 490 490"
                      xml:space="preserve"
                      stroke="#cc0000"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <polygon points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 489.292,457.678 277.331,245.004 489.292,32.337 "></polygon>{" "}
                      </g>
                    </svg>
                  </div>
      </div>
    </div>
  );
};

export default Fail;
