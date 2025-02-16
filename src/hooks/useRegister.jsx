import { useMutation } from '@tanstack/react-query';
import { register } from '../api/services/authService';
import { useNavigate } from 'react-router-dom';

const useRegister = () => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: register,
    onSuccess: (data) => {
      console.log('Registro exitoso', data);
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
      console.log(error);
    }
  };

  return {
    handleSubmit,
  };
};

export default useRegister;
