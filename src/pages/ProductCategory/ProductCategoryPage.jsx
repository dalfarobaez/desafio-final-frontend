import ProductGrid from '../../components/layout/ProductGrid';
import ProductCard from '../../components/productCard/ProductCard';
import ProductToolbar from '../../components/productToolbar/ProductToolbar';
import { ProductCategoryPageStyled } from './ProductCategoryPage.styles';

const ProductCategoryPage = () => {
  return (
    <ProductCategoryPageStyled>
      <ProductToolbar />
      <ProductGrid>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ProductGrid>
    </ProductCategoryPageStyled>
  );
};

export default ProductCategoryPage;
