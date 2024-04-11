import React from 'react';
import { useForm } from 'react-hook-form';
import LoadingModal from '../../components/LoadingModal'
import useLogin from '../../hooks/useLogin';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';
import Spinner from '../../components/Spinner';

const validationSchema = yup
.object({
  email: yup.string().email('Invalid email address').required('Email is required'),
  password:yup.string().required('Password is required')
})
.required()


function LoginPage() {
  const { register, handleSubmit, formState:{errors} } = useForm({resolver: yupResolver(validationSchema),});


  const {mutate,isLoading,isError,error} = useLogin();
  const onSubmit = (data) => {
    mutate(data);
  };


  return (
    

          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-md">
          <h1 className="text-3xl font-semibold mb-8 text-primary text-center">Login</h1>
          <p className="text-gray-600 mb-4">Don't have an account? 
        <Link to={"../register"} className="text-blue-500 ml-1 hover:underline">Register here</Link>
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6">
              <label className="flex text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                placeholder="Email"
                name="email"
                aria-invalid={errors.email ? "true" : "false"}
                autoComplete='on'
                {...register("email")}
              />
              {errors.email && <span className="flex text-red-500 text-xs italic">{errors.email?.message}</span>}
            </div>
            <div className="mb-6">
              <label className="flex text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
                name="password"
                aria-invalid={errors.password ? "true" : "false"}
                autoComplete='on'
                {...register("password")}              />
              {errors.password && <span className="flex text-red-500 text-xs italic">{errors.password?.message}</span>}
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
              <button
                className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full sm:w-auto"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? <div className='flex justify-center'><Spinner/>  Signing In... </div> : 'Sign In'}
              </button>
              <a className="inline-block text-sm text-primary hover:text-blue-800" href="#">
                Forgot Password?
              </a>
            </div>
            {isError && <div className="text-red-500 text-sm mt-2">{error.message}</div>}
          </form>
          {isLoading && <LoadingModal />}
        </div>
  );
}

export default LoginPage;
