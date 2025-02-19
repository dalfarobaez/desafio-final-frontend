import PropTypes from 'prop-types';
import { createContext } from 'react';
import useUser from '../hooks/useUser';

export const AuthContext = createContext({});

export const AuthContextProvider = ({ children }) => {
  const { user, token, setToken, logOutUser, handleAuthUser, isAuthLoading } = useUser();

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        logOutUser,
        setToken,
        handleAuthUser,
        isAuthLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
