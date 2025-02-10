import styled from 'styled-components';
import FlexContainer from '../../components/layout/FlexContainer';
import MainWrapper from '../../components/layout/MainWrapper';
import colors from '../../styles/colors';

const ProfilePageStyled = styled(MainWrapper)`
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h3 {
    font-size: 24px;
    text-align: center;
    text-transform: uppercase;
    color: ${colors.forkDark};
    margin-bottom: 15px;
  }
`;

const ProfileDataContainerStyled = styled(FlexContainer)`
  min-height: 200px;
  width: 100%;
  max-width: 600px;
  border-radius: 10px;
  border: 1px solid ${colors.forkSecondary};
  padding: 20px;
  flex-direction: column;
  align-items: start;

  h4 {
    font-size: 24px;
  }

  > p:nth-of-type(1) {
    font-size: 18px;
  }

  > p:nth-of-type(2) {
    font-size: 16px;
    color: ${colors.forkSecondaryVariant};
    margin-top: 20px;
  }

  > p:nth-of-type(3) {
    font-size: 16px;
  }
`;

export { ProfilePageStyled, ProfileDataContainerStyled };
