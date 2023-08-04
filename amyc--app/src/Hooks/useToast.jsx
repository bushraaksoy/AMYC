import { toast } from "react-toastify";
const useToast = (message, type) => {
  return (
    <>
      {toast(message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        type: type,
      })}
    </>
  );
};

export default useToast;
