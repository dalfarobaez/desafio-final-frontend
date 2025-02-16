import styled from "styled-components";
import MainWrapper from "../../components/layout/MainWrapper";
import FlexContainer from "../../components/layout/FlexContainer";

const ProductCategoryPageStyled = styled(MainWrapper)`
  flex-direction: column;
  justify-content: flex-start;
  padding-bottom: 100px;
`;

const NotProducts = styled(FlexContainer)`
  margin: auto auto;
  font-size: 20px;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  svg {
    font-size: 100px;
  }
`;

export { ProductCategoryPageStyled, NotProducts };
