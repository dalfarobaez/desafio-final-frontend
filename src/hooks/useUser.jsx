import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import { useEffect, useState } from 'react';
import { ADMIN_ROLE_ID } from '../utils/constants';

const initialState = {
  data: {
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
  },
  isAdmin: false,
  isAuthenticated: false,
};

const useUser = () => {
  const [token, setToken] = useState(() => Cookies.get('token') || null);
  const [user, setUser] = useState(initialState);
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  const logoutUser = () => {
    Cookies.remove('token');
    setUser(initialState);
    setToken(null);
  };

  const handleAuthUser = () => {
    if (!token) {
      setUser(initialState);
      setIsAuthLoading(false);
      return;
    }

    try {
      const decoded = jwtDecode(token);
      const isTokenValid = decoded.exp > Date.now() / 1000;

      if (isTokenValid) {
        const { email, firstName, lastName, phone, roleId } = decoded;
        setUser({
          data: {
            email,
            firstName,
            lastName,
            phone,
          },
          isAuthenticated: true,
          isAdmin: roleId === ADMIN_ROLE_ID ? true : false,
        });
      } else {
        logoutUser();
      }
    } catch (error) {
      console.error('Error decoding token:', error);
      logoutUser();
    }

    setIsAuthLoading(false);
  };

  useEffect(() => {
    handleAuthUser();
  }, [token]);

  return {
    user,
    token,
    setToken,
    logoutUser,
    handleAuthUser,
    isAuthLoading,
  };
};

export default useUser;
