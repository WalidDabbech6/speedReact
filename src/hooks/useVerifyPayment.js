import { useMutation } from "react-query";
import {  verifyPayment } from "../utils/api";

function useVerifyPaiment() {


	const { mutate, isLoading, isError,error,isSuccess,data } = useMutation((paymentRef) => verifyPayment(paymentRef),
		{
			onSuccess: (data) => {
    
				
			}
		});

 

  
	return {
		mutate,
		isLoading,
		isError,
		error,
		isSuccess,
		data
	};
}

export default useVerifyPaiment;