import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { StoreLayoutStyled } from "./StoreLayout.styles";
import styled from "styled-components";

const StoreLayout = () => {
  return (
    <StoreLayoutStyled>
      <Header />
      <CustomOutletWrapper>
        <Outlet />
      </CustomOutletWrapper>
      <Footer />
    </StoreLayoutStyled>
  );
};

export default StoreLayout;

const CustomOutletWrapper = styled.div`
  margin-left: 220px;
  width: calc(100% - 210px);
`;
