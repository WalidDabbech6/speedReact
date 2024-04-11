import { useMutation,useQueryClient } from "react-query";
import { getBookingHistory } from "../utils/api";
import { useState } from "react";

function useGetBookingHistory() {

	const queryClient = useQueryClient();

	const { mutate, isLoading, isError,error,isSuccess,data } = useMutation(() => getBookingHistory(),
		{
			onSuccess: (data) => {
			}
		});

 

  
	return {
		getHistory:mutate,
		isLoading,
		isError,
		error,
		data,
		isBookHistorySuccess:isSuccess,
	};
}

export default useGetBookingHistory;