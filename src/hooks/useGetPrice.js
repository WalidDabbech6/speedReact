import { useMutation,useQueryClient } from 'react-query';
import { getPrice, register } from '../utils/api';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function useGetPrice(onSubmitForm) {

  const queryClient = useQueryClient();
  const [success, setSuccess] = useState(false)

  const { mutate, isLoading, isError,error } = useMutation((dataSent) => getPrice(dataSent),
   {
    onSuccess: (data) => {
    
      setSuccess(true)
     
      onSubmitForm(data.price)
      queryClient.invalidateQueries('price');
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

export default useGetPrice;