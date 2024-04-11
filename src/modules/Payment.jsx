import React from "react";
import InputMask from 'react-input-mask';

const Payment = () => {
  return (
    <div className="bg-accent3">
      <div className="m-auto grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 lg:grid-rows-2">
        <div className="col-span-4 lg:col-span-4 p-6">
          <h4 className="text-3xl text-gray-700 mb-5">Payment information</h4>
          <div className="p-10 rounded-md shadow-md bg-white">
            <div className="mb-6">
              <label className="block mb-3 text-start text-gray-600" htmlFor="">
                Name on card
              </label>
              <input
                placeholder="FirstName LastName"
                type="text"
                className="border border-gray-500 rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-wider"
              />
            </div>
            <div className="mb-6">
              <label className="block text-start mb-3 text-gray-600" htmlFor="">
                Card number
              </label>
             <InputMask mask="9999 9999 9999" placeholder="____ ____ ____ ____"> 
              {(props)=><input
                {...props}
                type="tel"
                className="border border-gray-500 rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-widest"
              />}
             </InputMask>
            </div>
            <div className="mb-6 flex flex-wrap -mx-3w-full">
              <div className="w-2/3">
                <label className="block text-start mb-3 text-gray-600" htmlFor="">
                  Expiraion date
                </label>
                <div className="flex gap-2">
                <InputMask mask="99" placeholder="__"> 
                  {(props)=> <input
                  {...props}
                  type="tel"
                  className="border border-gray-500 rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-widest"
                />}
                </InputMask>
                <InputMask mask="99" placeholder="__"> 
                  {(props)=> <input
                  {...props}
                  type="tel"
                  className="border border-gray-500 rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-widest"
                />}
                </InputMask>
                </div>
              </div>
              <div className="w-1/3 pl-3">
                <label className="block text-start mb-3 text-gray-600" htmlFor="">
                  CVC
                </label>
                <InputMask mask="999" placeholder="___"> 
                  {(props)=> <input
                  {...props}
                  type="tel"
                  className="border border-gray-500 rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-widest"
                />}
                </InputMask>
              </div>
            </div>
            <div className="mb-6 text-right">
              <span className="text-right font-bold">400 TND</span>
            </div>
            <div>
              <button className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
                Confirm payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
