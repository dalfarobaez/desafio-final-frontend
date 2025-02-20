import styled from 'styled-components';
import colors from '../../../styles/colors';

const ButtonStyled = styled.button`
  background-color: ${({ $background }) => $background || colors.forkBlack};
  color: ${({ $textColor }) => $textColor || colors.forkWhite};
  width: ${({ $width }) => $width || '100%'};
  height: 30px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 20px;
  cursor: pointer;
`;

export { ButtonStyled };
