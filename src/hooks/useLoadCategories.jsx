import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../api/services/productService";
import { mapCategoriesByName } from "../utils/products";

const useLoadCategories = () => {
  const {
    data: categories,
    error: categoriesError,
    isLoading: categoriesIsLoading,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
    staleTime: 1000 * 60 * 60, // 1 HORA
    cacheTime: 1000 * 60 * 60, // 1 HORA
  });
  return {
    categories: mapCategoriesByName(categories),
    categoriesError,
    categoriesIsLoading,
  };
};

export default useLoadCategories;
