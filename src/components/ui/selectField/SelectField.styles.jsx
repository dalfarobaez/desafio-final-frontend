import styled from 'styled-components';
import device from '../../../styles/breakpoints';
import colors from '../../../styles/colors';
import FlexContainer from '../../layout/FlexContainer';

const SelectContainer = styled.div`
  width: 100%;
  height: 75px;
`;

const SelectTitle = styled(FlexContainer)`
  align-items: center;
  gap: 5px;
  label {
    text-align: left;
    min-width: 100px;
  }
`;

const StyledSelect = styled.select`
  width: 100%;
  cursor: pointer;
  font-weight: 600;
  padding: 10px;
  height: 40px;
  font-weight: 400;
  border-radius: 4px;
  border: 1px solid ${colors.forkBlack};
  color: ${({ value }) => (value ? colors.forkDark : colors.forkOverlayBg)};

  border: ${({ $error }) => ($error ? `1px solid  ${colors.forkPrimary}` : 'none')};

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
    margin-left: ${({ $showLabel }) => ($showLabel ? '105px' : 'none')};
    text-align: start;
    color: ${colors.forkPrimary};
    font-size: 12px;

    @media ${device.sm} {
      font-size: 14px;
    }
  }
`;

export { ErrorMessage, SelectContainer, StyledSelect, SelectTitle };
