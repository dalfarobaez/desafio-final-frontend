import styled from 'styled-components';
import FlexContainer from '../../layout/FlexContainer';

const CheckboxContainer = styled(FlexContainer)`
  align-items: center;

  > label {
    position: relative;

    span {
      margin-right: 10px;
    }

    input {
      position: absolute;
      top: 6px;
      padding: 10px;
    }
  }
`;

export { CheckboxContainer };
