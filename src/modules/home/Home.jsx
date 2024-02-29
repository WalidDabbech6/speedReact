import React, { useState } from "react";
import { Link } from "react-router-dom";

import RideForm from "./RideForm";
import Modal from "../../components/Modal";
import RideConfirmation from "../../components/RideConfirmation";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [price,setPrice] = useState(0)
  const [rideFormValues, setRideFormValues] = useState({})
  
  const onSubmitForm = (priceValue) => {
    setIsOpen((prev)=>!prev);
    setPrice(priceValue)
  }

  const onConfirm = (prop) => {
    console.log(prop)
  }
  
  return (
    <div className="bg-gray-100 min-h-screen">
      <nav className="bg-primary shadow-md">
        <div className="container mx-auto px-4 py-2 sm:px-0 ">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-semibold text-white">Dashboard</h1>
            <Link to="/logout" className="text-gray-200 hover:underline">
              Logout
            </Link>
          </div>
        </div>
      </nav>
      <div className="container mx-auto px-4 py-8 md:px-4 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:grid-rows-3">
        <div className="bg-white rounded-lg shadow-md p-6 row-span-3 col-span-1">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold text-gray-800">Rides</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-500 hover:text-primary cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
            <RideForm onSubmitForm={onSubmitForm} setRideFormValues={setRideFormValues} />
        
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 row-span-1 col-span-1">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold text-gray-800">Profile</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-500 hover:text-primary cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
            <p className="text-gray-600">
              View and update your profile information.
            </p>
          </div>
         
          <div className="bg-white rounded-lg shadow-md p-6 row-span-1 col-span-1">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold text-gray-800">Payments</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-500 hover:text-primary cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
            <p className="text-gray-600">
              Manage your payment methods and view transaction history.
            </p>
          </div>
        </div>
      </div>
      <Modal title="Ride Confirmation" isOpen={isOpen} setIsOpen={setIsOpen} onSubmit={()=>{
        onConfirm("hhhh")
      }}>
        {({handleSubmit})=>(
        <RideConfirmation onClick={handleSubmit} formValues={rideFormValues} price={price}/>
        )}
        </Modal>
    </div>
  );
};
export default HomePage;
