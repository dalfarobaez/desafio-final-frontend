import styled from 'styled-components';
import device from '../../styles/breakpoints';
import colors from '../../styles/colors';
import FlexContainer from '../layout/FlexContainer';

const ProductDetailsCardStyled = styled(FlexContainer)`
  min-height: 600px;
  width: 100%;
  max-width: 600px;
  border: 1px solid ${colors.forkLight};
  border-radius: 5px;
  margin-top: 50px;
  padding: 30px;
  flex-direction: column;
  align-items: center;

  img {
    height: 300px;
    width: 300px;
    object-fit: cover;
    border-radius: 100%;
    margin-bottom: 12px;
  }
`;

const TitleContainerStyled = styled(FlexContainer)`
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;

  h2 {
    text-transform: uppercase;
    font-size: 18px;
    color: ${colors.forkDark};

    @media ${device.md} {
      font-size: 24px;
    }

    @media ${device.lg} {
      font-size: 26px;
    }
  }

  p {
    font-size: 14px;
    color: ${colors.forkSecondaryVariant};
  }
`;

const DescStyled = styled.p`
  font-size: 14px;
  max-width: 350px;
  color: ${colors.forkBlack};
  flex: 1;
`;

const AddToCartContainerStyled = styled(FlexContainer)`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  max-width: 450px;

  > p:nth-of-type(1) {
    font-size: 18px;
    font-weight: 500;
    color: ${colors.forkBlack};

    @media ${device.lg} {
      font-size: 24px;
    }
  }
`;

export { ProductDetailsCardStyled, TitleContainerStyled, AddToCartContainerStyled, DescStyled };
