import PropTypes from 'prop-types';
import { formatPrice } from '../../utils/strings';
import Button from '../ui/button/Button';
import { AddToCartContainerStyled, ProductCardStyled, TextContainerStyled } from './ProductCard.styles';
import { useParams } from 'react-router-dom';

const ProductCard = ({ id, sku, title, subtitle, price, url_image }) => {
  const { categoryId } = useParams();

  return (
    <ProductCardStyled to={`/categoria/${categoryId}/producto/${id}`} direction='column'>
      <img src={url_image} alt={title} />
      <TextContainerStyled>
        <p>{title}</p>
        <p>{subtitle}</p>
      </TextContainerStyled>
      <AddToCartContainerStyled onClick={(event) => event.preventDefault()}>
        <p>{formatPrice(price)}</p>
        <Button width='120px'>Agregar</Button>
      </AddToCartContainerStyled>
    </ProductCardStyled>
  );
};

ProductCard.propTypes = {
  id: PropTypes.number,
  sku: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
};

export default ProductCard;
