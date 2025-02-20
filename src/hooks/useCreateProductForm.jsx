import { useMutation } from '@tanstack/react-query';
import { createProduct } from '../api/services/productService';

import useAuthContext from './useAuthContext';

const initialValues = {
  sku: '',
  title: '',
  subtitle: '',
  categoryId: 0,
  price: '',
  active: false,
  description: '',
  featured: false,
  stock: '',
  url_image: '',
};

const useCreateProductForm = () => {
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

export default useCreateProductForm;
