import styled from 'styled-components';
import device from '../../styles/breakpoints';
import colors from '../../styles/colors';
import FlexContainer from '../layout/FlexContainer';

const FooterStyled = styled(FlexContainer).attrs({
  as: 'footer',
})`
  background-color: ${colors.forkDark};
  color: ${colors.forkSecondary};
  min-height: 360px;
  padding: 60px 20px;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  position: relative;

  p {
    font-size: 12px;
    font-weight: 500;
  }

  > svg:nth-of-type(2),
  > svg:nth-of-type(3) {
    position: absolute;
  }

  > svg:nth-of-type(2) {
    bottom: 0;
    left: 0;
  }

  > svg:nth-of-type(3) {
    bottom: 0;
    right: 0;
  }

  @media ${device.lg} {
    min-height: 300px;
  }
`;

const SocialIconsContainerStyled = styled(FlexContainer)`
  justify-content: center;
  gap: 10px;
  margin: 20px 0;
`;

export { FooterStyled, SocialIconsContainerStyled };
