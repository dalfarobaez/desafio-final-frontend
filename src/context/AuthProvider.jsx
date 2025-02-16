import Cookies from 'js-cookie';
import PropTypes from 'prop-types';
import { createContext } from 'react';

export const AuthContext = createContext({});

export const AuthContextProvider = ({ children }) => {
  const token = Cookies.get('token');
  console.log('token AuthContext', token);
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
