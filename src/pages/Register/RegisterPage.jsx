import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import FormStyle from '../../components/authForm/Form';
import AuthContainer from '../../components/layout/AuthContainer';
import Button from '../../components/ui/button/Button';
import InputField from '../../components/ui/inputField/InputField';
import colors from '../../styles/colors';

const validationSchema = Yup.object({
  firstname: Yup.string()
    .min(3, 'El nombre debe tener al menos 3 caracteres.')
    .max(50, 'El nombre no debe tener más de 50 caracteres.')
    .matches(/^(?!\s+$).*$/, 'El nombre debe tener al menos 3 caracteres.')
    .required('Este campo es obligatorio.'),
  lastname: Yup.string()
    .min(3, 'El nombre debe tener al menos 3 caracteres.')
    .max(50, 'El nombre no debe tener más de 50 caracteres.')
    .matches(/^(?!\s+$).*$/, 'El nombre debe tener al menos 3 caracteres.')
    .required('Este campo es obligatorio.'),
  phone: Yup.string()
    .matches(/^\d{9}$/, 'El teléfono debe tener exactamente 9 números.')
    .required('Este campo es obligatorio.'),
  email: Yup.string().email('Correo inválido.').required('Este campo es obligatorio.'),
  password: Yup.string()
    .min(8, 'La contraseña debe tener 8 caracteres.')
    .matches(/[A-Z]/, 'Debe contener al menos una mayúscula.')
    .matches(/^(?!\s+$).*$/, 'La contraseña debe tener 8 caracteres.')
    .required('Este campo es obligatorio.'),
  confirmpassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir.')
    .required('Este campo es obligatorio.'),
});

const RegisterPage = () => {
  const initialValues = {
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    password: '',
    confirmpassword: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log('Formulario enviado: ', values);
    resetForm();
  };

  return (
    <>
      <AuthContainer>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <FormStyle>
              <h2>Regístrate</h2>
              <InputField label='Nombre' name='firstname' placeholder='Nombre' showError={true} />
              <InputField label='Apellido' name='lastname' placeholder='Apellido' showError={true} />
              <InputField label='Teléfono' type='number' name='phone' placeholder='Teléfono' showError={true} />
              <InputField label='Email' name='email' placeholder='Email' showError={true} />
              <InputField
                label='Contraseña'
                name='password'
                type='password'
                placeholder='Contraseña'
                showError={true}
              />
              <InputField
                label='Confirmar Contraseña'
                name='confirmpassword'
                type='password'
                placeholder='Confirmar contraseña'
                showError={true}
              />

              <Button background={colors.forkPrimary} width='200px' type='submit' disabled={isSubmitting}>
                Registrarse
              </Button>
              <Link to='/login'>¿Ya tienes cuenta? inicia sesión</Link>
            </FormStyle>
          )}
        </Formik>
      </AuthContainer>
    </>
  );
};

export default RegisterPage;
