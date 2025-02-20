import { useMutation } from "@tanstack/react-query";
import { createProduct } from "../api/services/authService";

import useAuthContext from "./useAuthContext";

const useCreateProduct = () => {
  const { token } = useAuthContext();

  const mutation = useMutation({
    mutationFn: (values) => createProduct(values, token),
    onSuccess: () => {},
    onError: (error) => {
      console.error("Error al crear producto", error);
    },
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await mutation.mutateAsync({
        sku: values.sku,
        title: values.title,
        subtitle: values.subtitle,
        description: values.description,
        categoryId: values.categoryId,
        price: values.price,
        active: values.active,
        featured: values.featured,
        stock: values.stock,
        url_image: values.url_image,
      });
      resetForm();
    } catch (error) {
      console.log(error);
    }
  };
  return {
    handleSubmit,
  };
};

export default useCreateProduct;
