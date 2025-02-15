const mapProductFields = (product) => {
  return {
    id: product.id,
    categoryId: product.categoria_id,
    title: product.titulo,
    subtitle: product.subtitulo,
    price: product.precio,
    sku: product.sku,
    image: product.imagen,
  };
};

const mapProductsByCategory = (products) => {
  return products.reduce((acc, product) => {
    const productMapped = mapProductFields(product);
    if (!acc[productMapped.categoryId]) {
      acc[productMapped.categoryId] = [];
    }
    acc[productMapped.categoryId].push(productMapped);
    return acc;
  }, {});
};

const getCategoryNameById = (categories, categoryId) => {
  return categories.find((category) => category.id === Number(categoryId))?.name;
};

const getProductsByCategory = (products, categoryId) => {
  return products[categoryId];
};

export { mapProductsByCategory, getCategoryNameById, getProductsByCategory };
