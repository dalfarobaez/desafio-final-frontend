import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import AuthFormStyled from '../../components/authForm/AuthForm.styles';
import AuthContainer from '../../components/layout/AuthContainer';
import Button from '../../components/ui/button/Button';
import InputField from '../../components/ui/inputField/InputField';
import colors from '../../styles/colors';

const validationSchema = Yup.object({
  email: Yup.string().email('Correo inválido.').required('Este campo es obligatorio.'),
  password: Yup.string()
    .min(8, 'La contraseña debe tener 8 caracteres.')
    .matches(/[A-Z]/, 'Debe contener al menos una mayúscula')
    .matches(/^(?!\s+$).*$/, 'No puede ser solo espacios en blanco')
    .required('Este campo es obligatorio.'),
});

const LoginPage = () => {
  const initialValues = { email: '', password: '' };

  const handleSubmit = (values, { resetForm }) => {
    console.log('Formulario enviado: ', values);
    resetForm();
  };

  return (
    <>
      <AuthContainer>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <AuthFormStyled>
              <h2>Iniciar sesión</h2>
              <InputField label='Email' name='email' placeholder='Email' showError={true} />
              <InputField
                label='Contraseña'
                name='password'
                type='password'
                placeholder='Contraseña'
                showError={true}
              />

              <Button background={colors.forkPrimary} width='200px' type='submit' disabled={isSubmitting}>
                Iniciar sesión
              </Button>
              <Link to='/register'>¿No tienes cuenta? Regístrate!</Link>
            </AuthFormStyled>
          )}
        </Formik>
      </AuthContainer>
    </>
  );
};

export default LoginPage;
