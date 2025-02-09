import styled from 'styled-components';
import FlexContainer from '../layout/FlexContainer';

const FiltersStyled = styled(FlexContainer)`
  max-height: 20px;
  font-size: 14px;
  gap: 15px;

  > p:nth-of-type(2) {
    font-weight: 600;
    position: relative;

    > svg {
      font-size: 20px;
      position: absolute;
    }
  }
`;

export { FiltersStyled };
