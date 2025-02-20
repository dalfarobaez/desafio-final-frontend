import ProductForm from "../../../components/productForm/ProductForm";
import useCreateProduct from "../../../hooks/useCreateProduct";

const NewProduct = () => {
  const initialValues = {
    sku: "",
    title: "",
    subtitle: "",
    categoryId: 1,
    price: "",
    active: false,
    description: "",
    featured: false,
    stock: "",
    url_image: "",
  };

  const { handleSubmit } = useCreateProduct();

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
