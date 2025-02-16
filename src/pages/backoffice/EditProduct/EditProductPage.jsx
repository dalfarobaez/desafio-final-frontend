import { useParams } from "react-router-dom";
import ProductForm from "../../../components/productForm/ProductForm";
import useLoadProductInfo from "../../../hooks/useLoadProductInfo";
import Loading from "../../../components/ui/loading/Loading";
import { LoadingContainer } from "./EditProduct.styles";
import InternalError from "../../../components/ui/error/InternalError";

const EditProduct = () => {
  const { productId } = useParams();

  const { product, productError, productIsLoading } =
    useLoadProductInfo(productId);

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

  const handleSubmit = (values, { resetForm }) => {
    console.log("Formulario enviado: ", values);
    resetForm();
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
      onSubmit={handleSubmit}
      title="Editar producto"
      button={productIsLoading ? "Cargando..." : "Guardar producto"}
      showLabel={true}
      isLoading={productIsLoading}
    />
  );
};

export default EditProduct;
