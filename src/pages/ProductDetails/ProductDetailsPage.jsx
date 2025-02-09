import ProductDetailsCard from '../../components/productDetailsCard/ProductDetailsCard';
import ProductToolbar from '../../components/productToolbar/ProductToolbar';
import { ProductDetailsPageStyled } from './ProductDetailsPage.styles';

const ProductDetailsPage = () => {
  return (
    <ProductDetailsPageStyled>
      <ProductToolbar />
      <ProductDetailsCard />
    </ProductDetailsPageStyled>
  );
};

export default ProductDetailsPage;
