import styled from 'styled-components';
import colors from '../../styles/colors';
import FlexContainer from '../layout/FlexContainer';
import { Link } from 'react-router-dom';

const SideMenuContainer = styled(FlexContainer)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 210px;
  min-width: 210px;
  background-color: ${colors.forkBlack};
  flex-direction: column;
  padding: 20px 15px;

  > svg {
    transform: scale(0.8);
    margin: 0 auto;
    margin-bottom: 10px;
  }

  > p {
    color: white;
    font-weight: 500;
    margin-bottom: 30px;
  }
`;

const MenuElement = styled(FlexContainer).attrs({
  as: Link,
})`
  justify-content: flex-start;
  align-items: center;
  height: 38px;
  transition: opacity 100ms ease-in;
  gap: 10px;

  &:hover {
    opacity: 0.7;
  }

  > * {
    color: ${colors.forkWhite};
  }

  p {
    font-size: 14px;
  }

  svg {
    font-size: 20px;
  }
`;

const LogOut = styled(MenuElement).attrs({ as: 'div' })`
  cursor: pointer;
  margin-top: auto;
  border-top: 1px solid ${colors.forkLight};
`;

export { LogOut, MenuElement, SideMenuContainer };
