import { Form } from "formik";
import colors from "../../styles/colors";
import FlexContainer from "../layout/FlexContainer";
import styled from "styled-components";

const FormStyle = styled(FlexContainer).attrs({
  as: Form,
})`
  border-radius: 5px;
  border: 1px solid ${colors.forkLight};
  padding: 30px;
  width: 100%;
  max-width: 420px;
  min-height: 300px;
  background-color: ${colors.forkWhite};
  display: flex;
  flex-flow: column nowrap;
  border-radius: 3px;

  h2 {
    margin: 20px 0;
  }

  button {
    align-self: center;
  }
  a {
    margin-top: 15px;
    transition: font-weight 300ms ease-in;
    &:hover {
      font-weight: 500;
    }
  }
`;
export default FormStyle;
