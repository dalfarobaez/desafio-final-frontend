import { useMutation } from "@tanstack/react-query";
import { updateProduct } from "../api/services/authService";

import useAuthContext from "./useAuthContext";

const useUpdateProduct = () => {
  const { token } = useAuthContext();

  const mutation = useMutation({
    mutationFn: ({ id, values }) => updateProduct({ id, values, token }),
    onSuccess: () => {},
    onError: (error) => {
      console.error("Error al actualizar producto", error);
    },
  });

  const handleSubmit = async (id, values) => {
    try {
      await mutation.mutateAsync({ id, values });
    } catch (error) {
      console.log(error);
    }
  };
  return {
    handleSubmit,
  };
};

export default useUpdateProduct;
