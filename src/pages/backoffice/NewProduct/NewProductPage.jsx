import FlexContainer from "../../../components/layout/FlexContainer";
import ProductForm from "../../../components/productForm/ProductForm";

const NewProduct = () => {
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
  return (
    <ProductForm
      initialValues={initialValues}
      onSubmit={handleSubmit}
      title="Nuevo producto"
      button="Crear"
    />
  );
};

export default NewProduct;
