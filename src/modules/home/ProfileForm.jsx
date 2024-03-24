import React from "react";
import { useAuth } from "../auth/context/AuthContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Invalid email address")
      .required("Email is required"),
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
  })
  .required();

const ProfileForm = ({ onClick }) => {
  const {currentUser} = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema),defaultValues:{
      email: currentUser.email,
      firstName: currentUser.first_name,
      lastName: currentUser.last_name,
  } });

  return (
    <>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit(onClick)}>
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <label
              htmlFor="email"
              className="flex text-gray-700 text-sm font-bold mb-2"
            >
              Email address
            </label>
            <input
              {...register("email")}
              id="email"
              type="email"
              disabled
              autoComplete="email"
              aria-invalid={errors.email ? "true" : "false"}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Email address"
            />
            {errors.email && (
              <span className="flex text-red-500 text-xs italic">
                {errors.email.message}
              </span>
            )}
          </div>
          <div>
            <label
              htmlFor="firstName"
              className="flex text-gray-700 text-sm font-bold mb-2"
            >
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
              <span className="flex text-red-500 text-xs italic">
                {errors.firstName.message}
              </span>
            )}
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="flex text-gray-700 text-sm font-bold mb-2"
            >
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
              <span className="flex text-red-500 text-xs italic">
                {errors.lastName.message}
              </span>
            )}
          </div>
        </div>
        <button
          type="submit"
          class="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-2 bg-primary hover:bg-blue-700 focus:outline-none text-white text-sm shadow-sm"
        >
          Confirm
        </button>
      </form>
    </>
  );
};

export default ProfileForm;
