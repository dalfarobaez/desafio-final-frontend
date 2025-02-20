import { useQuery } from '@tanstack/react-query';
import { getProduct } from '../api/services/productService';

const useLoadProductInfo = (id) => {
  const {
    data: product,
    error: productError,
    isLoading: productIsLoading,
  } = useQuery({
    queryKey: ['product', id],
    queryFn: () => getProduct(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 15, // 15 MINUTOS
    cacheTime: 1000 * 60 * 15, // 15 MINUTOS
  });

  return {
    product,
    productError,
    productIsLoading,
  };
};
export default useLoadProductInfo;
