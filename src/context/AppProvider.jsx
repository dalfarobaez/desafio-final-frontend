import PropTypes from 'prop-types';
import { createContext } from 'react';

export const AppContext = createContext({});

export const AppContextProvider = ({ children }) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
