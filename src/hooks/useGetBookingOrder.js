import { useMutation,useQueryClient } from "react-query";
import { getBookingHistory, getBookingOrder } from "../utils/api";

function useGetBookingHistory() {


	const { mutate, isLoading, isError,error,isSuccess,data } = useMutation((orderId) => getBookingOrder(orderId),
		{
			onSuccess: (data) => {
			}
		});

 

  
	return {
		mutate,
		isLoading,
		isError,
		error,
		data,
		isSuccess,
	};
}

export default useGetBookingHistory;