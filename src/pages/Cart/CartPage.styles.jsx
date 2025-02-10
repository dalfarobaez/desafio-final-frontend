import styled from "styled-components";
import FlexContainer from "../../components/layout/FlexContainer";
import device from "../../styles/breakpoints";
import colors from "../../styles/colors";

const CartContainer = styled(FlexContainer)`
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;

  @media ${device.md} {
    padding: 50px;
  }
`;

const Cart = styled(FlexContainer)`
  flex-direction: column;
  border-radius: 5px;
  border: 1px solid ${colors.forkLight};
  padding: 10px;

  width: 100%;
  max-width: 800px;
  min-height: 600px;

  @media ${device.sm} {
    padding: 30px;
  }
`;
const ItemList = styled(FlexContainer)`
  max-height: 420px;
  flex-direction: column;
  gap: 10px;
  overflow: auto;
`;

const Total = styled(FlexContainer)`
  height: 100px;
  padding: 20px;
  align-items: flex-start;
  margin-top: auto;
  border-top: 1px solid ${colors.forkLight};
  @media ${device.sm} {
    gap: 15px;
  }
  @media ${device.md} {
    padding: 20px;
    height: 120px;
  }
  h2 {
    font-weight: 500;
    font-size: 20px;
  }

  div {
    margin-left: auto;
    p {
      font-size: 22px;
      font-weight: 700;
    }
  }
`;

export { Cart, CartContainer, ItemList, Total };
