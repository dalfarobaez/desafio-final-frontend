import styled from 'styled-components';
import device from '../../styles/breakpoints';
import FlexContainer from '../layout/FlexContainer';

const ProductToolbarStyled = styled(FlexContainer)`
  min-height: 120px;
  max-height: 120px;
  padding: 20px 45px;
  width: 100%;

  @media ${device.xxl} {
    padding: 20px;
  }
`;

export { ProductToolbarStyled };
