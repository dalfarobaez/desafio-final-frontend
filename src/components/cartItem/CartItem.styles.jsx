import styled from "styled-components";
import device from "../../styles/breakpoints";
import FlexContainer from "../layout/FlexContainer";
import colors from "../../styles/colors";

const CartItemStyle = styled(FlexContainer)`
  height: 100px;
  padding: 10px;
  justify-content: flex-start;
  align-items: center;

  border-bottom: 1px solid ${colors.forkLight};
  gap: 5px;

  @media ${device.sm} {
    gap: 15px;
  }
  @media ${device.md} {
    padding: 20px;
    height: 120px;
  }

  img {
    height: 50px;
    width: 50px;
    object-fit: cover;
    border-radius: 100%;
    @media ${device.md} {
      height: 80px;
      width: 80px;
    }
  }
`;

const ItemName = styled(FlexContainer)`
  max-width: 200px;
  flex-direction: column;
  height: 100px;
  justify-content: center;
  align-items: flex-start;
  h2 {
    text-align: left;
    font-size: 12px;
    @media ${device.md} {
      font-size: 14px;
    }
  }
  p {
    text-align: left;
    font-size: 12px;
    @media ${device.md} {
      font-size: 14px;
    }
  }
`;

const ItemPrice = styled(FlexContainer)`
  margin-left: auto;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 18px;

  @media ${device.md} {
    gap: 15px;
  }
  h2 {
    text-align: left;
    font-size: 14px;
    @media ${device.md} {
      font-size: 20px;
    }
  }
`;

const ItemAmount = styled(FlexContainer)`
  flex-direction: column;
  svg {
    font-size: 20px;
    cursor: pointer;
    @media ${device.md} {
      font-size: 24px;
    }
  }
`;

export { CartItemStyle, ItemAmount, ItemName, ItemPrice };
