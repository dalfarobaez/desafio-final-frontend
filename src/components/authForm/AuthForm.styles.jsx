import { Form } from 'formik';
import styled from 'styled-components';
import colors from '../../styles/colors';
import FlexContainer from '../layout/FlexContainer';

const AuthFormStyled = styled(FlexContainer).attrs({
  as: Form,
})`
  border-radius: 5px;
  border: 1px solid ${colors.forkLight};
  padding: 30px;
  width: 100%;
  max-width: 420px;
  min-height: 300px;
  background-color: ${({ $isAdmin }) => ($isAdmin ? colors.forkDark : colors.forkWhite)};
  color: ${({ $isAdmin }) => ($isAdmin ? colors.forkLight : colors.forkBlack)};
  display: flex;
  flex-flow: column nowrap;
  border-radius: 3px;

  h2 {
    margin: 20px 0;
  }

  button {
    align-self: center;
  }

  a {
    margin-top: 15px;
    transition: font-weight 300ms ease-in;

    &:hover {
      font-weight: 500;
    }
  }
`;
export default AuthFormStyled;
