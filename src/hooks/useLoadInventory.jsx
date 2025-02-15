import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../api/services/productService";

const useLoadInventory = () => {
  const {
    data: products,
    error: productsError,
    isLoading: productsIsLoading,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
    staleTime: 1000 * 60 * 15, // 15 MINUTOS
    cacheTime: 1000 * 60 * 15, // 15 MINUTOS
  });

  return {
    products,
    productsError,
    productsIsLoading,
  };
};

export default useLoadInventory;
