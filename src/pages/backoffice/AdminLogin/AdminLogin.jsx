import { Navigate } from 'react-router-dom';
import LoginForm from '../../../components/loginForm/LoginForm';
import Loading from '../../../components/ui/loading/Loading';
import useUser from '../../../hooks/useUser';

const AdminLogin = () => {
  const { user, isAuthLoading } = useUser();

  if (isAuthLoading) {
    return <Loading />;
  }

  if (user.isAuthenticated && user.isAdmin) {
    return <Navigate to='/backoffice/inventario' replace />;
  }

  return <LoginForm isAdmin={true} />;
};

export default AdminLogin;
