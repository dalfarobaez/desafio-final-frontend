import styled from "styled-components";
import device from "../../../styles/breakpoints";
import colors from "../../../styles/colors";
import FlexContainer from "../../layout/FlexContainer";

const InputContainer = styled.div`
  height: 75px;
`;

const InputTitle = styled(FlexContainer)`
  align-items: center;
  gap: 5px;
  label {
    text-align: left;
    min-width: 100px;
  }
`;

const Input = styled.input`
  height: 40px;
  width: 100%;
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
  margin-left: ${({ $showLabel }) => ($showLabel ? "105px" : "none")};

  p {
    text-align: start;
    color: ${colors.forkPrimary};
    font-size: 12px;
    @media ${device.sm} {
      font-size: 14px;
    }
  }
`;

export { InputContainer, Input, ErrorMessage, InputTitle };
