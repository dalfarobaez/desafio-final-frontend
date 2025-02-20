import { useMutation } from '@tanstack/react-query';
import { login } from '../api/services/authService';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuthContext from './useAuthContext';
import { useEffect } from 'react';
import { toast } from 'sonner';

const useLogin = () => {
  const { setToken, user, handleAuthUser } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();
  const isAdminRoute = location.pathname.includes('/backoffice/login');

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (token) => {
      setToken(token);
      handleAuthUser();
    },
    onError: (error) => {
      console.error('Error al iniciar sesión', error);
      toast.error('Error al iniciar sesión');
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
      console.error(error);
    }
  };

  useEffect(() => {
    if (user.isAuthenticated) {
      if (isAdminRoute && user.isAdmin) {
        navigate('/backoffice/inventario');
      } else {
        navigate('/mi-perfil');
      }
    }
  }, [user.isAuthenticated, user.isAdmin]);

  return {
    handleSubmit,
  };
};

export default useLogin;
