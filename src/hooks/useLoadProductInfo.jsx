import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../api/services/productService";

const useLoadProductInfo = (id) => {
  const {
    data: product,
    error: productError,
    isLoading: productIsLoading,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProduct(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 15, // 15 MINUTOS
    cacheTime: 1000 * 60 * 15, // 15 MINUTOS
  });

  return {
    product: productIsLoading
      ? {
          sku: "",
          title: "",
          subtitle: "",
          categoryId: 0,
          price: 0,
          description: "",
          stock: 0,
          url_image: "",
          active: false,
          feature: false,
        }
      : {
          sku: product[0]?.sku,
          title: product[0]?.titulo,
          subtitle: product[0]?.subtitulo,
          categoryId: product[0]?.categoria_id,
          price: product[0]?.precio,
          description: product[0]?.descripcion,
          stock: product[0]?.stock,
          url_image: product[0]?.imagen,
          active: product[0]?.activo || true,
          feature: product[0]?.destacado || false,
        },
    productError,
    productIsLoading,
  };
};
export default useLoadProductInfo;
