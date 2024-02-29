import { useMutation,useQueryClient } from 'react-query';
import { register } from '../utils/api';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function useRegistration() {

  const queryClient = useQueryClient();
  const navigate = useNavigate()
  const [success, setSuccess] = useState(false)

  const { mutate, isLoading, isError,error } = useMutation((data) => register(data),
   {
    onSuccess: (data) => {
      // navigate('/login');
      setSuccess(true)
      // Store token in localStorage or sessionStorage
    //   authentication();
    //   localStorage.setItem('token', data.accessToken);
    //   // Invalidate queries to trigger refetch of data
    //   queryClient.invalidateQueries('userData');
    }
  });

 

  
  return {
    mutate,
    isLoading,
    isError,
    error,
    success
  }
}

export default useRegistration;