import { ImgLoading, LoadingContainer } from "./Loading.styles";

const Loading = () => {
  return (
    <LoadingContainer>
      {/* <h2>Esto puede tomar unos momentos...</h2> */}
      <ImgLoading />
    </LoadingContainer>
  );
};
export default Loading;
