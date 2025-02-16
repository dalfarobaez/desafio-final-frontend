import ProductGrid from "../../components/layout/ProductGrid";
import ProductCard from "../../components/productCard/ProductCard";
import ProductToolbar from "../../components/productToolbar/ProductToolbar";
import InternalError from "../../components/ui/error/InternalError";
import Loading from "../../components/ui/loading/Loading";
import useStoreContext from "../../hooks/useStoreContext";
import { TbFaceIdError } from "react-icons/tb";
import {
  NotProducts,
  ProductCategoryPageStyled,
} from "./ProductCategoryPage.styles";

const ProductCategoryPage = () => {
  const {
    productsByCategory,
    productsError,
    productsIsLoading,
    activeCategory,
  } = useStoreContext();

  return (
    <ProductCategoryPageStyled>
      <ProductToolbar />
      {productsIsLoading && <Loading />}
      {productsError && <InternalError />}

      {!productsIsLoading && productsByCategory && (
        <>
          {productsByCategory[activeCategory] ? (
            <ProductGrid>
              {productsByCategory[activeCategory]?.map((product) => {
                return <ProductCard key={product.id} {...product} />;
              })}
            </ProductGrid>
          ) : (
            <NotProducts>
              <TbFaceIdError />
              Aún no hay productos asociados a esta categoría.
            </NotProducts>
          )}
        </>
      )}
    </ProductCategoryPageStyled>
  );
};

export default ProductCategoryPage;
