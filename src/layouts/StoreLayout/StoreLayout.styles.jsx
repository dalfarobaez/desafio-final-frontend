import styled from 'styled-components';
import FlexContainer from '../../components/layout/FlexContainer';

const StoreLayoutStyled = styled(FlexContainer)`
  flex-direction: column;
  height: 100vh;

  > *:nth-child(2) {
    flex: 1;
  }
`;

export { StoreLayoutStyled };
