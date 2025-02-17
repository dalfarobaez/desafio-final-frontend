import { useMutation } from "@tanstack/react-query";
import { login } from "../api/services/authService";
import { useLocation, useNavigate } from "react-router-dom";
import useAuthContext from "./useAuthContext";

const useLogin = () => {
  const { setToken, user, isAuthLoading } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();

  const isAdminRoute = location.pathname.includes("/backoffice/login");

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      console.log("Login exitoso", data);
      setToken(data);

      // if (!isAuthLoading) {
      //   if (isAdminRoute && user.isAdmin) {
      //     return navigate("/backoffice/inventario");
      //   }
      //   navigate("/mi-perfil");
      // }
      console.log("auth loading " + isAuthLoading);
      console.log("is admin route " + isAdminRoute);
      console.log("is admin " + user.isAdmin);
      console.log(user);

      if (!isAuthLoading && isAdminRoute && user.isAdmin) {
        navigate("/backoffice/inventario");
      }
      if (!isAuthLoading && !isAdminRoute && !user.isAdmin) {
        navigate("/mi-perfil");
      }
    },
    onError: (error) => {
      console.error("Error al iniciar sesión", error);
    },
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await mutation.mutateAsync({
        email: values.email,
        password: values.password,
      });
      console.log("from handle submit ");
      console.log(values);

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
