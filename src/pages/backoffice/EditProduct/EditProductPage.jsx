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

  // const {
  //   sku,
  //   title,
  //   subtitle,
  //   categoryId,
  //   price,
  //   active,
  //   description,
  //   featured,
  //   stock,
  //   url_image,
  // } = product;
  // const initialValues = {
  //   sku: "21",
  //   title: "Beef bourguignon",
  //   subtitle: "Con champiñones y tocino, 4 porciones",
  //   categoryId: 3,
  //   price: "18990",
  //   active: true,
  //   description:
  //     "Clásica preparación francesa de carne al vino tinto cocinada lentamente, preparada con tocino, champiñones y vegetales.",
  //   featured: false,
  //   stock: "100",
  //   url_image:
  //     "https://corpora-fork.s3.amazonaws.com/back_img/PTPP01279-beef-bourguignon-fam-frontal-830-1732567123448.jpg",
  // };

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
