import { useMutation } from '@tanstack/react-query';
import { createProduct } from '../api/services/productService';

import useAuthContext from './useAuthContext';

const initialValues = {
  sku: '',
  title: '',
  subtitle: '',
  categoryId: 0,
  price: 0,
  active: false,
  description: '',
  featured: false,
  stock: 0,
  url_image: '',
};

const useCreateProduct = () => {
  const { token } = useAuthContext();

  const mutation = useMutation({
    mutationFn: ({ values }) => createProduct({ values, token }),
    onSuccess: () => {},
    onError: (error) => {
      console.error('Error al crear producto', error);
    },
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await mutation.mutateAsync({ values });
      resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  return {
    handleSubmit,
    initialValues,
  };
};

export default useCreateProduct;
