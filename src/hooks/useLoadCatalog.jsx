import { useQuery } from '@tanstack/react-query';
import { getAllProducts, getCategories } from '../api/services/productService';
import { mapProductsByCategory } from '../utils/products';

const useLoadCatalog = () => {
  const {
    data: categories,
    error: categoriesError,
    isLoading: categoriesIsLoading,
  } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
    staleTime: 1000 * 60 * 60, // 1 HORA
    cacheTime: 1000 * 60 * 60, // 1 HORA
  });

  const {
    data: products,
    error: productsError,
    isLoading: productsIsLoading,
  } = useQuery({
    queryKey: ['products'],
    queryFn: getAllProducts,
    staleTime: 1000 * 60 * 15, // 15 MINUTOS
    cacheTime: 1000 * 60 * 15, // 15 MINUTOS
  });

  let productsByCategory = [];

  if (!productsError && products) {
    productsByCategory = mapProductsByCategory(products);
  }

  return {
    categories,
    categoriesError,
    categoriesIsLoading,
    productsByCategory,
    productsError,
    productsIsLoading,
  };
};

export default useLoadCatalog;
