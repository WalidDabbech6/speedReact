import { useMutation } from "react-query";
import { bookRide, updateProfile } from "../utils/api";
import { useAuth } from "../modules/auth/context/AuthContext";
import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
function useBookRide() {
	const navigate = useNavigate();

	const { mutate, isLoading, isError, error,isSuccess } = useMutation(
		(data) => bookRide(data),
		{
			onSuccess: (data) => {
				toast.success("RideBooked !", {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					draggable: true,
					progress: undefined,
					theme: "dark",
					transition: Bounce,
				});
				navigate(`/payment/${data.id}`)
			},
		}
	);

	return {
		bookRide:mutate,
		isLoading,
		isError,
		error,
		isSuccess,
	};
}

export default useBookRide;
