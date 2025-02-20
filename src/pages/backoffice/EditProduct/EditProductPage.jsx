import { useParams } from "react-router-dom";
import ProductForm from "../../../components/productForm/ProductForm";
import useLoadProductInfo from "../../../hooks/useLoadProductInfo";
import Loading from "../../../components/ui/loading/Loading";
import { LoadingContainer } from "./EditProduct.styles";
import InternalError from "../../../components/ui/error/InternalError";
import useUpdateProduct from "../../../hooks/useUpdateProduct";

const EditProduct = () => {
  const { productId } = useParams();
  const { handleSubmit } = useUpdateProduct();

  const { product, productError, productIsLoading } =
    useLoadProductInfo(productId);

  // console.log(product);

  const handleUpdate = (values) => {
    handleSubmit(productId, values);
  };

  const initialValues = {
    sku: "",
    title: "",
    subtitle: "",
    categoryId: 0,
    price: "",
    active: false,
    description: "",
    featured: false,
    stock: "",
    url_image: "",
  };

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
      onSubmit={handleUpdate}
      title="Editar producto"
      button={productIsLoading ? "Cargando..." : "Guardar producto"}
      showLabel={true}
      isLoading={productIsLoading}
    />
  );
};

export default EditProduct;
