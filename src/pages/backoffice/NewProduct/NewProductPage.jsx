import ProductForm from '../../../components/productForm/ProductForm';
import useCreateProductForm from '../../../hooks/useCreateProductForm';

const NewProduct = () => {
  const { initialValues, handleSubmit } = useCreateProductForm();

  return <ProductForm initialValues={initialValues} onSubmit={handleSubmit} title='Nuevo producto' button='Crear' />;
};

export default NewProduct;
