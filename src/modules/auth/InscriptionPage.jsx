import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import useRegistration from "../../hooks/useRegistration";
import { yupResolver } from "@hookform/resolvers/yup";
import OtpInput from "../../components/OtpInput";
import OtpPage from "../../components/OtpPage";
import Modal from "../../components/Modal";
import { Link } from 'react-router-dom';
import AuthLayout from "./AuthLayout";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Invalid email address")
      .required("Email is required"),
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    password: yup.string().min(6).required("Password is required"),
  })
  .required();

const InscriptionPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const { mutate,success } = useRegistration();

  const onSubmit = async (data) => {
    mutate(data);
  };

  let otp;
  const handleOtpChange = (val) => {
    otp = val
    
  };
  return (
       <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-md">
          <h1 className="text-3xl font-semibold mb-8 text-primary text-center">
            Registration
          </h1>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email" className="flex text-gray-700 text-sm font-bold mb-2">
                Email address
              </label>
              <input
                {...register("email")}
                id="email"
                type="email"
                autoComplete="email"
                aria-invalid={errors.email ? "true" : "false"}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Email address"
              />
              {errors.email && (
                <span className="flex text-red-500 text-xs italic">{errors.email.message}</span>
              )}
            </div>
            <div>
              <label htmlFor="firstName" className="flex text-gray-700 text-sm font-bold mb-2">
                First Name
              </label>
              <input
                {...register("firstName")}
                id="firstName"
                type="text"
                autoComplete="given-name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="First Name"
              />
              {errors.firstName && (
                <span className="flex text-red-500 text-xs italic">{errors.firstName.message}</span>
              )}
            </div>
            <div>
              <label htmlFor="lastName" className="flex text-gray-700 text-sm font-bold mb-2">
                Last Name
              </label>
              <input
                {...register("lastName")}
                id="lastName"
                type="text"
                autoComplete="family-name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Last Name"
              />
              {errors.lastName && (
                <span className="flex text-red-500 text-xs italic">{errors.lastName.message}</span>
              )}
            </div>
            <div>
              <label htmlFor="password" className="flex text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                {...register("password")}
                id="password"
                type="password"
                autoComplete="new-password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Password"
              />
              {errors.password && (
                <span className="flex text-red-500 text-xs italic">{errors.password.message}</span>
              )}
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Register
            </button>
          </div>
        </form>
        <Modal isOpen={success} onSubmit={()=>{onSubmit({otp:otp})}}>
        {({handleSubmit})=>(
                         <OtpPage onClick={handleSubmit}>
                         <OtpInput numInputs={4} onChange={handleOtpChange} />
                        </OtpPage>
        )}
        </Modal>
              {/* <OtpPage>
             <OtpInput numInputs={6} onChange={handleOtpChange} />
            </OtpPage>
              </Modal> */}
                 <p className="text-gray-600 mt-4">Already have an account? 
        <Link to="../login" className="text-blue-500 ml-1 hover:underline">Login here</Link>
         </p>
        </div>
   );
   
};

export default InscriptionPage;
