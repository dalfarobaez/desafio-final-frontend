import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import AuthFormStyled from '../../components/authForm/AuthForm.styles';
import AuthContainer from '../../components/layout/AuthContainer';
import Button from '../../components/ui/button/Button';
import InputField from '../../components/ui/inputField/InputField';
import colors from '../../styles/colors';
import PropTypes from 'prop-types';
import useLogin from '../../hooks/useLogin';

const validationSchema = Yup.object({
  email: Yup.string().email('Correo inválido.').required('Este campo es obligatorio.'),
  password: Yup.string()
    .min(8, 'La contraseña debe tener 8 caracteres.')
    .matches(/[A-Z]/, 'Debe contener al menos una mayúscula')
    .matches(/^(?!\s+$).*$/, 'No puede ser solo espacios en blanco')
    .required('Este campo es obligatorio.'),
});

const LoginForm = ({ isAdmin }) => {
  const initialValues = { email: '', password: '' };
  const { handleSubmit } = useLogin();

  return (
    <>
      <AuthContainer $isAdmin={isAdmin}>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <AuthFormStyled $isAdmin={isAdmin}>
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
              {!isAdmin && <Link to='/register'>¿No tienes cuenta? Regístrate!</Link>}
            </AuthFormStyled>
          )}
        </Formik>
      </AuthContainer>
    </>
  );
};

LoginForm.propTypes = {
  isAdmin: PropTypes.bool,
};
export default LoginForm;
