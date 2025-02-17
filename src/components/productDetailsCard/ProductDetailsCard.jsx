import { useParams } from "react-router-dom";
import useLoadProductInfo from "../../hooks/useLoadProductInfo";
import Button from "../ui/button/Button";
import {
  AddToCartContainerStyled,
  DescStyled,
  ProductDetailsCardStyled,
  TitleContainerStyled,
} from "./ProductDetailsCard.styles";
import Loading from "../ui/loading/Loading";
import InternalError from "../ui/error/InternalError";
import { formatPrice } from "../../utils/strings";

const ProductDetailsCard = () => {
  const { productId } = useParams();
  const { product, productError, productIsLoading } =
    useLoadProductInfo(productId);

  if (productIsLoading) {
    return <Loading />;
  }
  if (productError) {
    return <InternalError />;
  }

  const {
    active,
    categoryId,
    sku,
    stock,
    feature,
    description,

    price,

    subtitle,
    title,
    url_image,
  } = product;
  return (
    <ProductDetailsCardStyled>
      <TitleContainerStyled>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </TitleContainerStyled>
      <img src={url_image} alt={`${title}-image`} />
      <DescStyled>{description}</DescStyled>
      <AddToCartContainerStyled>
        <p>{formatPrice(price)}</p>
        <Button width="200px">Agregar al carrito</Button>
      </AddToCartContainerStyled>
    </ProductDetailsCardStyled>
  );
};

export default ProductDetailsCard;
