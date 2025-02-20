import ProductForm from '../../../components/productForm/ProductForm';
import useCreateProduct from '../../../hooks/useCreateProduct';

const NewProduct = () => {
  const { initialValues, handleSubmit } = useCreateProduct();

  return <ProductForm initialValues={initialValues} onSubmit={handleSubmit} title='Nuevo producto' button='Crear' />;
};

export default NewProduct;
