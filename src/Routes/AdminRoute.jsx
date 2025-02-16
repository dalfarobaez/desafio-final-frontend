import { Navigate, Outlet } from 'react-router-dom';
import useUser from '../hooks/useUser';
import Loading from '../components/ui/loading/Loading';

const AdminRoute = () => {
  const { user, isAuthLoading } = useUser();

  if (isAuthLoading) {
    return <Loading />;
  }

  if (!user.isAuthenticated || !user.isAdmin) {
    return <Navigate to='/backoffice/login' replace />;
  }

  return <Outlet />;
};

export default AdminRoute;
