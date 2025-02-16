import { useMutation } from '@tanstack/react-query';
import { login } from '../api/services/authService';
import { useNavigate } from 'react-router-dom';
import useAuthContext from './useAuthContext';

const useLogin = () => {
  const { setToken } = useAuthContext();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      console.log('Login exitoso', data);
      setToken(data);
      navigate('/mi-perfil');
    },
    onError: (error) => {
      console.error('Error al iniciar sesión', error);
    },
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await mutation.mutateAsync({
        email: values.email,
        password: values.password,
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

export default useLogin;
