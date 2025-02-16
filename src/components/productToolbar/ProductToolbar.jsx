import { useParams } from "react-router-dom";
import BreadCrumbs from "../breadcrumbs/Breadcrumbs";
import Filters from "../filters/Filters";
import MainWrapper from "../layout/MainWrapper";
import { ProductToolbarStyled } from "./ProductToolbar.styles";
import useStoreContext from "../../hooks/useStoreContext";
import { getCategoryNameById, getProductTitleById } from "../../utils/products";

const ProductToolbar = () => {
  const {
    activeProduct,
    activeCategory,
    categories,
    categoriesIsLoading,
    categoriesError,
    productsIsLoading,
    productsError,
    productsByCategory,
  } = useStoreContext();
  let categoryName = "";
  let productName = "";

  if (categories && activeCategory) {
    categoryName = getCategoryNameById(categories, activeCategory);
  }
  if (productsByCategory) {
    productName = getProductTitleById(
      productsByCategory[activeCategory],
      activeProduct
    );
  }

  if (
    categoriesIsLoading ||
    productsIsLoading ||
    categoriesError ||
    productsError
  ) {
    return <ProductToolbarStyled></ProductToolbarStyled>;
  }

  return (
    <ProductToolbarStyled>
      <MainWrapper>
        <BreadCrumbs category={categoryName} product={productName} />
        <Filters />
      </MainWrapper>
    </ProductToolbarStyled>
  );
};

export default ProductToolbar;
