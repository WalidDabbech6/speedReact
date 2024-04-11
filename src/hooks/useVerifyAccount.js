import { useMutation } from "react-query";
import { verifyAccount } from "../utils/api";
import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function useVerifyAccount() {
  const { mutate, isLoading, isError, error, isSuccess } = useMutation(
    (data) => verifyAccount(data),
    {
      onSuccess: (data) => {
        toast.success("Votre compte a été verifié avec succès !", {
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
    verify: mutate,
    isLoadingOtp: isLoading,
    isErrorOtp: isError,
    errorOtp: error,
    isSuccessOtp: isSuccess,
  };
}

export default useVerifyAccount;
