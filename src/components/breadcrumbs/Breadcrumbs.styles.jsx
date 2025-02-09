import styled from 'styled-components';
import colors from '../../styles/colors';
import FlexContainer from '../layout/FlexContainer';

const BreadcrumbsStyled = styled(FlexContainer)`
  max-height: 20px;
  font-size: 14px;

  > p:nth-of-type(even) {
    color: ${colors.forkPrimary};
    font-weight: 600;
    margin: 0 5px;
  }

  > p.active {
    font-weight: 600;
  }
`;

export { BreadcrumbsStyled };
