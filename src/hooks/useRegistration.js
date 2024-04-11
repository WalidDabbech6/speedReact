import { useMutation,useQueryClient } from "react-query";
import { register } from "../utils/api";
import { useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function useRegistration() {

	const queryClient = useQueryClient();
	const navigate = useNavigate();

	const { mutate, isLoading, isError,error,isSuccess } = useMutation((data) => register(data),
		{
			onSuccess: (data) => {
				toast.success("Votre compte a été créé avec succès !",
				 {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					draggable: true,
					progress: undefined,
					theme: "dark",
					transition: Bounce,
				});
			}
		});

 

  
	return {
		mutate,
		isLoading,
		isError,
		error,
		isSuccess
	};
}

export default useRegistration;