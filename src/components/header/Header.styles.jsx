import styled from 'styled-components';
import colors from '../../styles/colors';
import FlexContainer from '../layout/FlexContainer';
import { Link } from 'react-router-dom';
import MainWrapper from '../layout/MainWrapper';

const FirstContainerStyled = styled(FlexContainer)`
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 0 20px;

  svg:nth-of-type(1) {
    width: 100px;
  }
`;

const SecondContainerStyled = styled(FirstContainerStyled)`
  background-color: ${colors.forkLight};
  height: 55px;

  svg:nth-of-type(1) {
    cursor: pointer;
    width: 50px;
    margin-left: 15px;
  }
`;

const UserActionsContainerStyled = styled(FlexContainer).attrs({
  as: 'nav',
})`
  justify-content: space-between;
  align-items: center;

  svg:nth-of-type(1) {
    width: 30px;
  }
`;

const LoginContainerStyled = styled(FlexContainer).attrs({ as: Link })`
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  position: relative;
  padding: 5px 30px 0 0;
  border-right: 1px solid ${colors.forkSecondary};
  max-height: 35px;

  div {
    text-align: left;

    p {
      font-size: 13px;
    }

    p:nth-of-type(1) {
      font-weight: 600;
    }

    svg {
      position: absolute;
      right: 10px;
      bottom: 5px;
    }
  }
`;

const CartContainerStyled = styled(FlexContainer).attrs({
  as: Link,
})`
  padding: 0 15px;
  position: relative;

  svg:nth-of-type(1) {
    width: 30px;
  }

  svg:nth-of-type(2) {
    position: absolute;
    right: -2px;
    top: 20px;
  }

  span {
    background-color: ${colors.forkPrimary};
    color: ${colors.forkWhite};
    font-weight: 700;
    border-radius: 100%;
    height: 12px;
    width: 12px;
    font-size: 9px;
    position: absolute;
    bottom: 9px;
    right: 11px;
  }
`;

const MenuContainerStyled = styled(MainWrapper).attrs({
  as: 'button',
})`
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  background: transparent;

  p {
    font-weight: 600;
    font-size: 20px;
  }
`;

const CategoriesOverlayStyled = styled.div`
  margin-top: 105px;
  width: 100%;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  overflow: hidden;
  background-color: ${colors.forkOverlayBg};
  height: ${({ $isOverlayOpen }) => ($isOverlayOpen ? '100vh' : '0px')};
  transition: height 300ms ease-in-out;
`;

const CategoriesListStyled = styled(FlexContainer)`
  background-color: ${colors.forkWhite};
  flex-direction: column;
  width: 250px;
  margin-left: 30px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;

  a {
    text-align: left;
    width: 100%;
    padding: 10px 30px;
    border-bottom: 1px solid ${colors.forkLight};
    font-weight: 500;
    font-size: 17px;

    &:hover {
      color: ${colors.forkWhite};
      background-color: ${colors.forkPrimary};
    }

    &:last-child {
      border-bottom: none;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
`;

export {
  FirstContainerStyled,
  SecondContainerStyled,
  UserActionsContainerStyled,
  LoginContainerStyled,
  CartContainerStyled,
  MenuContainerStyled,
  CategoriesOverlayStyled,
  CategoriesListStyled,
};
