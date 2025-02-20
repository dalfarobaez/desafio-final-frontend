import { useParams } from 'react-router-dom';
import ProductForm from '../../../components/productForm/ProductForm';
import useEditProductForm from '../../../hooks/useEditProductForm';
import Loading from '../../../components/ui/loading/Loading';
import { LoadingContainer } from './EditProduct.styles';
import InternalError from '../../../components/ui/error/InternalError';

const EditProduct = () => {
  const { productId } = useParams();
  const { product, productError, productIsLoading, initialValues, handleSubmit } = useEditProductForm(productId);

  if (productIsLoading) {
    return (
      <LoadingContainer>
        <Loading />
      </LoadingContainer>
    );
  }

  if (productError) {
    return (
      <LoadingContainer>
        <InternalError />
      </LoadingContainer>
    );
  }

  return (
    <ProductForm
      initialValues={productIsLoading ? initialValues : product}
      onSubmit={(values) => handleSubmit(productId, values)}
      title='Editar producto'
      button={productIsLoading ? 'Cargando...' : 'Guardar producto'}
      showLabel={true}
      isLoading={productIsLoading}
    />
  );
};

export default EditProduct;
