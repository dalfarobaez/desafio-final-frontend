import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../api/services/productService";

const useLoadProductInfo = (id) => {
  const {
    data: product,
    error: productError,
    isLoading: productIsLoading,
  } = useQuery({
    queryKey: ["products", id],
    queryFn: () => getProduct(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 15, // 15 MINUTOS
    cacheTime: 1000 * 60 * 15, // 15 MINUTOS
  });

  return {
    product: {
      sku: product?.sku,
      title: product?.titulo,
      subtitle: product?.subtitulo,
      categoryId: product?.categoria_id,
      price: product?.precio,
      description: product?.descripcion,
      stock: product?.stock,
      url_image: product?.imagen,
      active: product?.activo,
      feature: product?.destacado,
    },
    productError,
    productIsLoading,
  };
};
export default useLoadProductInfo;
