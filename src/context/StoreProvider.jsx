import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import useLoadCatalog from '../hooks/useLoadCatalog';
import { useParams } from 'react-router-dom';

export const StoreContext = createContext({});

export const StoreContextProvider = ({ children }) => {
  const { categories, categoriesError, categoriesIsLoading, productsByCategory, productsError, productsIsLoading } =
    useLoadCatalog();
  const { categoryId } = useParams();
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    setActiveCategory(Number(categoryId) || 0);
  }, [categoryId]);

  return (
    <StoreContext.Provider
      value={{
        categories,
        categoriesError,
        categoriesIsLoading,
        productsByCategory,
        productsError,
        productsIsLoading,
        activeCategory,
        setActiveCategory,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

StoreContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
