import styled from 'styled-components';
import device from '../../styles/breakpoints';
import FlexContainer from '../layout/FlexContainer';

const ProductToolbarStyled = styled(FlexContainer)`
  max-height: 120px;
  padding: 20px 45px;
  width: 100%;

  @media ${device.xxl} {
    padding: 20px;
  }
`;

export { ProductToolbarStyled };
