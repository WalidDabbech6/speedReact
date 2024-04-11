import React, { useState } from "react";
import { Link } from "react-router-dom";

import RideForm from "./RideForm";
import Profile from "./Profile";
import Modal from "../../components/Modal";
import RideConfirmation from "../../components/RideConfirmation";
import useBookRide from "../../hooks/useBookRide";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [price,setPrice] = useState(0);
  const [rideFormValues, setRideFormValues] = useState({});
  const {bookRide} = useBookRide();
  const onSubmitForm = (priceValue) => {
    setIsOpen((prev)=>!prev);
    setPrice(priceValue);
  };

  const onConfirm = (prop) => {
    let priceValue =  prop.time?.split(":").shift() >= 21 || prop.time?.split(":").shift() <=5   ? price *1.5 :price
    bookRide({...prop,price:priceValue})
  };
  
  return (
    <div>
   {/* <img className="bg" src="background.jpg"/> */}
    <div className="flex flex-col h-screen">
      <nav className="bg-primary py-2 px-5 shadow-md">
        <div className="container-fluid mx-auto px-4 py-2 sm:px-0">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-semibold text-white">Home Page</h1>
            <Link to="/logout" className="text-gray-200 hover:underline">
              Logout
            </Link>
          </div>
        </div>
      </nav>
      <main className="bg-accent3 flex-1 overflow-y-auto p-5">
        <div className="flex flex-col-reverse md:flex md:flex-row gap-6">
        <div className="bg-white rounded-lg shadow-md p-6 md:basis-1/3 ">
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
            {/* <div className="flex items-center justify-between mb-4">
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
            </p> */}
            <Profile/>
         
          {/* <div className="bg-white rounded-lg shadow-md p-6 row-span-1 col-span-1">
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
          </div> */}
        </div>
      </main>
      <Modal title="Ride Confirmation" isOpen={isOpen} setIsOpen={setIsOpen} onSubmit={()=>{
        onConfirm(rideFormValues);
      }}>
        {({handleSubmit})=>(
        <RideConfirmation onClick={handleSubmit} formValues={rideFormValues} price={price}/>
        )}
        </Modal>
    </div>
    </div>
  );
};
export default HomePage;
