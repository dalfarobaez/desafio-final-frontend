import { useParams } from 'react-router-dom';
import BreadCrumbs from '../breadcrumbs/Breadcrumbs';
import Filters from '../filters/Filters';
import MainWrapper from '../layout/MainWrapper';
import { ProductToolbarStyled } from './ProductToolbar.styles';
import useStoreContext from '../../hooks/useStoreContext';
import { getCategoryNameById } from '../../utils/products';

const ProductToolbar = () => {
  const { activeCategory, categories, categoriesIsLoading, categoriesError, productsIsLoading, productsError } =
    useStoreContext();
  let categoryName = '';

  if (categories && activeCategory) {
    categoryName = getCategoryNameById(categories, activeCategory);
  }

  if (categoriesIsLoading || productsIsLoading || categoriesError || productsError) {
    return <ProductToolbarStyled></ProductToolbarStyled>;
  }

  return (
    <ProductToolbarStyled>
      <MainWrapper>
        <BreadCrumbs category={categoryName} />
        <Filters />
      </MainWrapper>
    </ProductToolbarStyled>
  );
};

export default ProductToolbar;
