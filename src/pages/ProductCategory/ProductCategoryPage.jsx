import ProductGrid from '../../components/layout/ProductGrid';
import ProductCard from '../../components/productCard/ProductCard';
import ProductToolbar from '../../components/productToolbar/ProductToolbar';
import useStoreContext from '../../hooks/useStoreContext';
import { ProductCategoryPageStyled } from './ProductCategoryPage.styles';

const ProductCategoryPage = () => {
  const { productsByCategory, productsError, productsIsLoading, activeCategory } = useStoreContext();

  return (
    <ProductCategoryPageStyled>
      <ProductToolbar />
      <ProductGrid>
        {productsError && <p>ups!</p>}
        {productsIsLoading && <p>cargando...</p>}
        {productsByCategory &&
          productsByCategory[activeCategory]?.map((product) => {
            return <ProductCard key={product.id} {...product} />;
          })}
      </ProductGrid>
    </ProductCategoryPageStyled>
  );
};

export default ProductCategoryPage;
