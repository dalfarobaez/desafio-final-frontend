import styled from "styled-components";
import FlexContainer from "../../layout/FlexContainer";
import colors from "../../../styles/colors";
import device from "../../../styles/breakpoints";

const SelectContainer = styled(FlexContainer)`
  flex-direction: column;
  width: 100%;
  /* max-width: 400px; */
  height: 75px;
`;

const StyledSelect = styled.select`
  cursor: pointer;
  font-weight: 600;
  /* padding: 8px 12px; */
  padding: 10px;
  height: 40px;
  font-weight: 400;
  border-radius: 4px;
  border: 1px solid ${colors.forkBlack};
  color: ${({ value }) => (value ? colors.forkDark : colors.forkOverlayBg)};

  border: ${({ $error }) =>
    $error ? `1px solid  ${colors.forkPrimary}` : "none"};

  &:focus {
    outline: none;
  }
  option {
    color: ${colors.forkDark};
  }
  option:first-child {
    color: ${colors.forkOverlayBg};
  }
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

export { ErrorMessage, SelectContainer, StyledSelect };
