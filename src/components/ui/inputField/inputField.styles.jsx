import styled from "styled-components";
import colors from "../../../styles/colors";
import device from "../../../styles/breakpoints";
import FlexContainer from "../../layout/FlexContainer";

const InputContainer = styled.div`
  height: 75px;
`;

const Input = styled.input`
  height: 40px;
  width: 100%;
  max-width: 400px;
  padding: 10px;

  border-radius: 5px;

  border: ${({ $error }) =>
    $error
      ? `1px solid  ${colors.forkPrimary}`
      : `1px solid ${colors.forkLight}`};
`;

const ErrorMessage = styled(FlexContainer)`
  flex-direction: column;
  justify-content: center;
  height: 35px;

  p {
    text-align: start;
    color: ${colors.forkPrimary};
    font-size: 12px;
    @media ${device.sm} {
      font-size: 14px;
    }
  }
`;

export { InputContainer, Input, ErrorMessage };
