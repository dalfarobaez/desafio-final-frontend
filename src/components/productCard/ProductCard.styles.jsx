import styled from 'styled-components';
import colors from '../../styles/colors';
import FlexContainer from '../layout/FlexContainer';

const ProductCardStyled = styled(FlexContainer)`
  height: 450px;
  border-radius: 5px;
  border: 1px solid ${colors.forkLight};

  img {
    height: 230px;
    width: 100%;
    object-fit: cover;
    border-radius: 5px 5px 40px 40px;
    border-bottom: 1px solid ${colors.forkLight};
  }

  > div:nth-of-type(1) {
    margin-top: 20px;
  }
`;

const TextContainerStyled = styled(FlexContainer)`
  padding: 0 20px;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;

  > p:nth-of-type(1) {
    font-size: 16px;
    font-weight: 600;
    color: ${colors.forkBlack};
  }

  > p:nth-of-type(2) {
    font-size: 12px;
    color: ${colors.forkSecondaryVariant};
  }
`;

const AddToCartContainerStyled = styled(FlexContainer)`
  padding: 40px 0px 20px 0px;
  margin: 0 20px 0 20px;
  border-top: 1px solid ${colors.forkLight};
  justify-content: space-between;

  > p:nth-of-type(1) {
    font-size: 18px;
    font-weight: 500;
    color: ${colors.forkBlack};
  }
`;

export { ProductCardStyled, TextContainerStyled, AddToCartContainerStyled };
