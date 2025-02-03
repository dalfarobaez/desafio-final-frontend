import styled from 'styled-components';
import colors from '../../styles/colors';
import FlexContainer from '../layout/FlexContainer';

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

const LoginContainerStyled = styled(FlexContainer)`
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

const CartContainerStyled = styled(FlexContainer)`
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

export {
  FirstContainerStyled,
  SecondContainerStyled,
  UserActionsContainerStyled,
  LoginContainerStyled,
  CartContainerStyled,
};
