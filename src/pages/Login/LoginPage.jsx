import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import FlexContainer from "../../components/layout/FlexContainer";
import styled from "styled-components";
import InputField from "../../components/inputField/InputField";
import colors from "../../styles/colors";
import device from "../../styles/breakpoints";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Correo inválido.")
    .required("Este campo es obligatorio."),
  password: Yup.string()
    .min(8, "La contraseña debe tener 8 caracteres.")
    .matches(/[A-Z]/, "Debe contener al menos una mayúscula")
    .matches(/^(?!\s+$).*$/, "No puede ser solo espacios en blanco")
    .required("Este campo es obligatorio."),
});

const LoginPage = () => {
  const initialValues = { email: "", password: "" };

  const handleSubmit = (values, { resetForm }) => {
    console.log("Formulario enviado: ", values);
    resetForm();
  };
  return (
    <>
      <FirstContainerStyled>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <h2>Iniciar sesión</h2>
              <InputField
                label="Email"
                name="email"
                placeholder="Ingrese su email"
                showError={true}
              />
              <InputField
                label="Contraseña"
                name="password"
                type="password"
                placeholder="Ingrese su contraseña"
                showError={true}
              />
              <InputField
                label="Email"
                name="email"
                placeholder="Ingrese su email"
                showError={true}
              />
            </Form>
          )}
        </Formik>
      </FirstContainerStyled>
    </>
  );
};

const FirstContainerStyled = styled(FlexContainer)`
  padding: 50px;
  justify-content: center;
  align-items: center;
  background-color: red;
  width: 100%;
  form {
    h2 {
      margin: 20px 0;
    }
    padding: 30px;
    width: 100%;
    max-width: 650px;
    min-height: 300px;
    background-color: ${colors.forkLight};
    display: flex;
    flex-flow: column nowrap;
    /* gap: 20px; */
    border-radius: 3px;
    @media ${device.md} {
      max-width: 650px;
    }
  }
`;
export default LoginPage;
