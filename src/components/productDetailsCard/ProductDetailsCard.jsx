import Button from '../ui/button/Button';
import {
  AddToCartContainerStyled,
  DescStyled,
  ProductDetailsCardStyled,
  TitleContainerStyled,
} from './ProductDetailsCard.styles';

const ProductDetailsCard = () => {
  return (
    <ProductDetailsCardStyled>
      <TitleContainerStyled>
        <h2>Beef bourguignon</h2>
        <p>Con champiñones y tocino, 4 porciones</p>
      </TitleContainerStyled>
      <img
        src='https://corpora-fork.s3.amazonaws.com/back_img/PTPP01279-beef-bourguignon-fam-frontal-830-1732567123448.jpg'
        alt='aaa'
      />
      <DescStyled>
        Clásica preparación francesa de carne al vino tinto cocinada lentamente, preparada con tocino, champiñones y
        vegetales.
      </DescStyled>
      <AddToCartContainerStyled>
        <p>$18.990</p>
        <Button width='200px'>Agregar al carrito</Button>
      </AddToCartContainerStyled>
    </ProductDetailsCardStyled>
  );
};

export default ProductDetailsCard;
