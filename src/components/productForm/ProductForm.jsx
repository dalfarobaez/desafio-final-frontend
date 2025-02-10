import { Formik } from 'formik';
import * as Yup from 'yup';
import colors from '../../styles/colors';
import Button from '../ui/button/Button';
import CheckboxField from '../ui/checkboxField/CheckboxField';
import InputField from '../ui/inputField/InputField';
import { CheckboxContainer, FormContainer, FormWrapper, ProductFormStyled } from './ProductForm.styles';

const validationSchema = Yup.object({
  sku: Yup.string().required('Este campo es obligatorio.'),
  title: Yup.string().required('Este campo es obligatorio.'),
  subtitle: Yup.string().required('Este campo es obligatorio.'),
  categoryId: Yup.number().required('Este campo es obligatorio.'),
  price: Yup.number().required('Este campo es obligatorio.'),
  active: Yup.bool(),
  description: Yup.string().required('Este campo es obligatorio.'),
  featured: Yup.bool(),
  stock: Yup.number().required('Este campo es obligatorio.'),
  url_image: Yup.string().required('Este campo es obligatorio.'),
});

const ProductForm = () => {
  const initialValues = {
    sku: '',
    title: '',
    subtitle: '',
    categoryId: 0,
    price: 0,
    active: false,
    description: '',
    featured: false,
    stock: 0,
    url_image: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log('Formulario enviado: ', values);
    resetForm();
  };

  return (
    <ProductFormStyled>
      <h3>Nuevo Producto</h3>
      <FormWrapper>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {({ isSubmitting }) => {
            return (
              <FormContainer>
                <InputField label='SKU' name='sku' placeholder='SKU' showError />
                <InputField label='Título' name='title' placeholder='Título' showError />
                <InputField label='Subtítulo' name='subtitle' placeholder='Subtítulo' showError />
                <InputField label='Categoría ID' name='categoryId' type='number' placeholder='Categoría ID' showError />
                <InputField label='Precio' name='price' type='number' placeholder='Precio' showError />
                <InputField label='Descripción' name='description' placeholder='Descripción' showError />
                <InputField label='Stock' name='stock' type='number' placeholder='Stock disponible' showError />
                <InputField label='URL de Imagen' name='url_image' placeholder='URL de la imagen' showError />
                <CheckboxContainer>
                  <CheckboxField label='Activo' name='active' />
                  <CheckboxField label='Destacado' name='featured' />
                </CheckboxContainer>
                <Button background={colors.forkPrimary} type='submit' disabled={isSubmitting}>
                  Crear
                </Button>
              </FormContainer>
            );
          }}
        </Formik>
      </FormWrapper>
    </ProductFormStyled>
  );
};

export default ProductForm;
