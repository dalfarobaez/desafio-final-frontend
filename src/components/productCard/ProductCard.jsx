import Button from '../ui/button/Button';
import { AddToCartContainerStyled, ProductCardStyled, TextContainerStyled } from './ProductCard.styles';

const ProductCard = () => {
  return (
    <ProductCardStyled direction='column'>
      <img
        src='https://corpora-fork.s3.amazonaws.com/back_img/PTPP01279-beef-bourguignon-fam-frontal-830-1732567106988.jpg'
        alt='aaa'
      />
      <TextContainerStyled>
        <p>Beef bourguignon</p>
        <p>Con champiñones y tocino, 4 porciones</p>
      </TextContainerStyled>
      <AddToCartContainerStyled>
        <p>$18.990</p>
        <Button width='120px'>Agregar</Button>
      </AddToCartContainerStyled>
    </ProductCardStyled>
  );
};

export default ProductCard;
