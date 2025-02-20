import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createProduct } from '../api/services/productService';

import useAuthContext from './useAuthContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

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
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: ({ values }) => createProduct({ values, token }),
    onSuccess: (response) => {
      queryClient.invalidateQueries(['products']);
      toast.success(response?.msg);
      navigate('/backoffice/inventario');
    },
    onError: (error) => {
      console.error('Error al crear producto', error);
      toast.error('Error al crear producto');
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
