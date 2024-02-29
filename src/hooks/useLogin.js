import { useMutation,useQueryClient } from 'react-query';
import { login } from '../utils/api';
import { useAuth } from '../modules/auth/context/AuthContext';

function useLogin() {
    const { authentication } = useAuth();

  const queryClient = useQueryClient();

  const { mutate, isLoading, isError,error } = useMutation((credentials) => login(credentials),
   {
    onSuccess: (data) => {
      // Store token in localStorage or sessionStorage
      authentication();
      localStorage.setItem('token', data.accessToken);
      // Invalidate queries to trigger refetch of data
      queryClient.invalidateQueries('userData');
    }
  });

 

  
  return {
    mutate,
    isLoading,
    isError,
    error
  }
}

export default useLogin;