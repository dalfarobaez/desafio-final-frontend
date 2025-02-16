import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import useLoadCatalog from "../hooks/useLoadCatalog";
import { useParams } from "react-router-dom";
import { getProductTitleById } from "../utils/products";

export const StoreContext = createContext({});

export const StoreContextProvider = ({ children }) => {
  const {
    categories,
    categoriesError,
    categoriesIsLoading,
    productsByCategory,
    productsError,
    productsIsLoading,
  } = useLoadCatalog();
  const { categoryId, productId } = useParams();
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeProduct, setActiveProduct] = useState("");

  useEffect(() => {
    setActiveCategory(Number(categoryId) || 0);
    setActiveProduct(Number(productId) || 0);
  }, [categoryId, productId]);

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
        activeProduct,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

StoreContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
