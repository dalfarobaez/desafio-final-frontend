import { Formik } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import useLoadCategories from '../../hooks/useLoadCategories';
import colors from '../../styles/colors';
import Button from '../ui/button/Button';
import CheckboxField from '../ui/checkboxField/CheckboxField';
import InputField from '../ui/inputField/InputField';
import SelectField from '../ui/selectField/SelectField';
import { CheckboxContainer, FormContainer, FormWrapper, ProductFormStyled } from './ProductForm.styles';

const validationSchema = Yup.object({
  sku: Yup.string().required('Este campo es obligatorio.'),
  title: Yup.string().required('Este campo es obligatorio.'),
  subtitle: Yup.string().required('Este campo es obligatorio.'),
  categoryId: Yup.number().min(0, 'Debes seleccionar una categoría válida.').required('Este campo es obligatorio.'),
  price: Yup.number().required('Este campo es obligatorio.'),
  active: Yup.bool(),
  description: Yup.string().required('Este campo es obligatorio.'),
  featured: Yup.bool(),
  stock: Yup.number().required('Este campo es obligatorio.'),
  url_image: Yup.string().required('Este campo es obligatorio.'),
});

const ProductForm = ({ initialValues, onSubmit, title, button, showLabel, isLoading }) => {
  const { categories, categoriesError, categoriesIsLoading } = useLoadCategories();

  const categoriesOptions =
    Array.isArray(categories) && categories.length > 0
      ? categories.map((cat) => ({
          value: cat.id ?? 0,
          label: cat.name || 'Categoría sin nombre',
        }))
      : [{ value: 0, label: 'No hay categorías disponibles' }];

  return (
    <ProductFormStyled>
      <h3>{title}</h3>
      <FormWrapper>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          enableReinitialize
        >
          {({ isSubmitting }) => {
            return (
              <FormContainer>
                <InputField
                  label='SKU'
                  name='sku'
                  placeholder='SKU'
                  showError
                  showLabel={showLabel}
                  isLoading={isLoading}
                />
                <InputField
                  label='Título'
                  name='title'
                  placeholder='Título'
                  showError
                  showLabel={showLabel}
                  isLoading={isLoading}
                />
                <InputField
                  label='Subtítulo'
                  name='subtitle'
                  placeholder='Subtítulo'
                  showError
                  showLabel={showLabel}
                  isLoading={isLoading}
                />
                {!categoriesIsLoading && categories && (
                  <SelectField
                    label='Categoría'
                    name='categoryId'
                    options={categoriesOptions}
                    placeholder='Selecciona una categoría'
                    showError
                    showLabel={showLabel}
                    isLoading={categoriesIsLoading || categoriesError}
                    disabled={categoriesIsLoading || categoriesError}
                  />
                )}

                <InputField
                  label='Precio'
                  name='price'
                  type='number'
                  placeholder='Precio'
                  showError
                  showLabel={showLabel}
                  isLoading={isLoading}
                />
                <InputField
                  label='Descripción'
                  name='description'
                  placeholder='Descripción'
                  showError
                  showLabel={showLabel}
                  isLoading={isLoading}
                />
                <InputField
                  label='Stock'
                  name='stock'
                  type='number'
                  placeholder='Stock disponible'
                  showError
                  showLabel={showLabel}
                  isLoading={isLoading}
                />
                <InputField
                  label='URL de Imagen'
                  name='url_image'
                  placeholder='URL de la imagen'
                  showError
                  showLabel={showLabel}
                  isLoading={isLoading}
                />
                <CheckboxContainer>
                  <CheckboxField label='Activo' name='active' />
                  <CheckboxField label='Destacado' name='featured' />
                </CheckboxContainer>
                <Button type='submit' background={colors.forkPrimary} disabled={isSubmitting || isLoading}>
                  {button}
                </Button>
              </FormContainer>
            );
          }}
        </Formik>
      </FormWrapper>
    </ProductFormStyled>
  );
};

ProductForm.propTypes = {
  initialValues: PropTypes.shape({
    sku: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    categoryId: PropTypes.number.isRequired,
    price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    active: PropTypes.bool.isRequired,
    description: PropTypes.string,
    featured: PropTypes.bool.isRequired,
    stock: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    url_image: PropTypes.string,
  }).isRequired,
  isLoading: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
  showLabel: PropTypes.bool,
};

export default ProductForm;
