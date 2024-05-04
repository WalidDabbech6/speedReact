import { useMutation } from "react-query";
import { makePayment } from "../utils/api";

function useMakePayment() {
	const { mutate, isLoading, isError, error,isSuccess,data } = useMutation(
		(data) => makePayment(data),
		{
			onSuccess: (data) => {
				window.location.href=data.payUrl;
			},
		}
	);

	return {
		pay:mutate,
		paymentData:data,
		isLoading,
		isError,
		error,
		isSuccess,
	};
}

export default useMakePayment;
