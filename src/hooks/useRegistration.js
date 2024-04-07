import { useMutation,useQueryClient } from "react-query";
import { register } from "../utils/api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function useRegistration() {

	const queryClient = useQueryClient();
	const navigate = useNavigate();
	const [success, setSuccess] = useState(false);

	const { mutate, isLoading, isError,error } = useMutation((data) => register(data),
		{
			onSuccess: (data) => {
				setSuccess(true);
			}
		});

 

  
	return {
		mutate,
		isLoading,
		isError,
		error,
		success
	};
}

export default useRegistration;