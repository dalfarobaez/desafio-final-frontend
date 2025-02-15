import styled from "styled-components";
import FlexContainer from "../../layout/FlexContainer";
import Spinner from "../../../assets/spinner.gif";

const LoadingContainer = styled(FlexContainer)`
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImgLoading = styled.img.attrs({
  src: Spinner,
  alt: "spinner image",
})`
  width: 200px;
`;

export { ImgLoading, LoadingContainer };
