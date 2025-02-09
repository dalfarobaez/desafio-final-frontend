import styled from 'styled-components';
import colors from '../../../styles/colors';

const ButtonStyled = styled.button`
  background-color: ${(props) => props.background || colors.forkBlack};
  color: ${(props) => props.textColor || colors.forkWhite};
  width: ${(props) => props.width || '100%'};
  height: 30px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 20px;
`;

export { ButtonStyled };
