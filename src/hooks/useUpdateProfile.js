import { useMutation } from "react-query";
import { updateProfile } from "../utils/api";
import { useAuth } from "../modules/auth/context/AuthContext";
import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function useUpdateProfile() {
	const { authentication } = useAuth();
	const { mutate, isLoading, isError, error,isSuccess } = useMutation(
		(data) => updateProfile(data),
		{
			onSuccess: (data) => {
				localStorage.setItem("user", JSON.stringify(data));
				authentication(data);
				// queryClient.invalidateQueries('updateProfile')
				toast.success("Profil mis à jour avec succès !", {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					draggable: true,
					progress: undefined,
					theme: "dark",
					transition: Bounce,
				});
			},
		}
	);

	return {
		mutate,
		isLoading,
		isError,
		error,
		isSuccess,
	};
}

export default useUpdateProfile;
