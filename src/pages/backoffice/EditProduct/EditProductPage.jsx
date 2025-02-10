import ProductForm from "../../../components/productForm/ProductForm";

const EditProduct = () => {
  const initialValues = {
    sku: "21",
    title: "Beef bourguignon",
    subtitle: "Con champiñones y tocino, 4 porciones",
    categoryId: 3,
    price: 18990,
    active: true,
    description:
      "Clásica preparación francesa de carne al vino tinto cocinada lentamente, preparada con tocino, champiñones y vegetales.",
    featured: false,
    stock: "100",
    url_image:
      "https://corpora-fork.s3.amazonaws.com/back_img/PTPP01279-beef-bourguignon-fam-frontal-830-1732567123448.jpg",
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log("Formulario enviado: ", values);
    resetForm();
  };
  return (
    <ProductForm
      initialValues={initialValues}
      handleSubmit={handleSubmit}
      title="Editar producto"
      button="Guardar cambios"
      showLabel={true}
    />
  );
};

export default EditProduct;
