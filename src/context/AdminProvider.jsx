import PropTypes from 'prop-types';
import { createContext } from 'react';

export const AdminContext = createContext({});

export const AdminContextProvider = ({ children }) => {
  return <AdminContext.Provider value={{}}>{children}</AdminContext.Provider>;
};

AdminContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
