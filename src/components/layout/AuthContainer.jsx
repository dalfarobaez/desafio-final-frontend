import styled from "styled-components";
import FlexContainer from "./FlexContainer";
import colors from "../../styles/colors";

const AuthContainer = styled(FlexContainer)`
  padding: 50px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${({ $isAdmin }) => ($isAdmin ? "100vh" : "auto")};
  background-color: ${({ $isAdmin }) =>
    $isAdmin ? colors.forkDark : colors.forkWhite};
`;

export default AuthContainer;
