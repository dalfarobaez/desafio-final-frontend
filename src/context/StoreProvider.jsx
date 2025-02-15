import PropTypes from 'prop-types';
import { createContext } from 'react';
import useInitialLoad from '../hooks/useInitialLoad';

export const StoreContext = createContext({});

export const StoreContextProvider = ({ children }) => {
  const { categories, categoriesError, categoriesIsLoading } = useInitialLoad();

  return (
    <StoreContext.Provider value={{ categories, categoriesError, categoriesIsLoading }}>
      {children}
    </StoreContext.Provider>
  );
};

StoreContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
