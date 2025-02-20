import styled from 'styled-components';
import Spinner from '../../../assets/spinner.gif';
import FlexContainer from '../../layout/FlexContainer';

const LoadingContainer = styled(FlexContainer)`
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImgLoading = styled.img.attrs({
  src: Spinner,
  alt: 'spinner image',
})`
  width: 100px;
`;

export { ImgLoading, LoadingContainer };
