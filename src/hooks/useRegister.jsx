import { useMutation } from '@tanstack/react-query';
import { register } from '../api/services/authService';
import { useNavigate } from 'react-router-dom';
import useAuthContext from './useAuthContext';

const useRegister = () => {
  const { setToken } = useAuthContext();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: register,
    onSuccess: (token) => {
      setToken(token);
      navigate('/mi-perfil');
    },
    onError: (error) => {
      console.error('Error al registrar', error);
    },
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await mutation.mutateAsync({
        email: values.email,
        password: values.password,
        firstname: values.firstname,
        lastname: values.lastname,
        phone: values.phone,
      });

      resetForm();
    } catch (error) {
      console.error(error);
    }
  };

  return {
    handleSubmit,
  };
};

export default useRegister;
