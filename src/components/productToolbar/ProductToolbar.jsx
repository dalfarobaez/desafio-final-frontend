import BreadCrumbs from '../breadcrumbs/BreadCrumbs';
import Filters from '../filters/Filters';
import MainWrapper from '../layout/MainWrapper';
import { ProductToolbarStyled } from './ProductToolbar.styles';

const ProductToolbar = () => {
  return (
    <ProductToolbarStyled>
      <MainWrapper>
        <BreadCrumbs category={'Ensaladas & Bowls'} />
        <Filters />
      </MainWrapper>
    </ProductToolbarStyled>
  );
};

export default ProductToolbar;
