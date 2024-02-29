import React, { useState, useRef, useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';



const schema = yup
  .object({
    otp: yup.string().matches(/^\d+$/, 'Must be a number').length(4, 'Must be exactly 6 characters'),
  })
  .required();
const OtpInput = ({ onChange,numInputs }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });
  const [otp, setOtp] = useState(new Array(numInputs).fill(''));
  const inputsRef = useRef([]);

  const handleChange = (index, event) => {
    const value = event.target.value;
    if (isNaN(value)) {
      return;
    }

    setOtp([...otp.map((d, idx) => (idx === index ? value : d))]);

    // Focus next input
    if (value !== '' && index < numInputs - 1) {
      inputsRef.current[index + 1].focus();
    }
  
  };

  useEffect(() => {
     // Notify parent component
    if (onChange && typeof onChange === 'function') {
      onChange(otp.join(''));
    }
  
    return () => {
      
    }
  }, [handleChange])
  

  const handleKeyDown = (index, event) => {
    if (event.key === 'Backspace' && index > 0 && event.target.value === '') {
      // Focus previous input on backspace
      inputsRef.current[index - 1].focus();
    }
  };

  return (
    <>
     <div className="flex justify-center">
      {Array(numInputs)
        .fill('')
        .map((_, index) => (
          <input
            key={index}
            type="text"
            maxLength={1}
            {...register("otp")}
            id={`otp${index}`}
            aria-invalid={errors.otp ? "true" : "false"}
            className="w-12 h-12 m-2 text-2xl text-center border-b border-gray-400 outline-none focus:border-blue-600"
            value={otp[index]}
            onChange={(e) => handleChange(index, e)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            ref={(input) => (inputsRef.current[index] = input)}
          />
        ))}
    </div>
      {errors.otp && <p className="text-red-500">{errors.otp.message}</p>}
    </>
  );
};

export default OtpInput;