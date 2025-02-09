import React from "react";
import { useField } from "formik";
import styled from "styled-components";
import colors from "../../styles/colors";
import device from "../../styles/breakpoints";
import FlexContainer from "../layout/FlexContainer";
// import FlexContainer from "../layout/FlexContainer";

// interface InputFieldProps{
//     label:string;
//     name:string;
//     type?:string;
//     placeholder?:string
// }

const InputField = ({ label, showError, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <InputContainer>
      {/* <label htmlFor={props.email}>{label}</label> */}
      <Input {...field} {...props} $error={meta.touched && meta.error} />
      {meta.touched && meta.error && showError ? (
        <ErrorMessage>
          <p>{meta.error}</p>
        </ErrorMessage>
      ) : null}
    </InputContainer>
  );
};

const InputContainer = styled.div`
  height: 75px;
`;

const Input = styled.input`
  height: 40px;
  width: 100%;
  max-width: 400px;
  padding: 10px;
  border-radius: 3px;
  border: ${({ $error }) => ($error ? "1px solid red" : "none")};
`;

const ErrorMessage = styled(FlexContainer)`
  flex-direction: column;
  justify-content: center;
  height: 35px;

  p {
    color: ${colors.forkPrimary};
    font-size: 12px;
    @media ${device.sm} {
      font-size: 14px;
    }
  }
`;

export default InputField;
