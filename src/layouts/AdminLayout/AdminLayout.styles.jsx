import styled from "styled-components";
import FlexContainer from "../../components/layout/FlexContainer";

const AdminLayoutStyled = styled(FlexContainer)`
  flex-direction: row;
  height: 100vh;
`;

const CustomOutletWrapper = styled.div`
  margin-left: 210px;
  width: 100%;
`;

export { AdminLayoutStyled, CustomOutletWrapper };
