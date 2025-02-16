import { Navigate, Outlet } from 'react-router-dom';
import useUser from '../hooks/useUser';
import Loading from '../components/ui/loading/Loading';

const PrivateRoute = () => {
  const { user, isAuthLoading } = useUser();

  if (isAuthLoading) {
    return <Loading />;
  }

  if (!user.isAuthenticated) {
    return <Navigate to='/login' replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;
