const mapProductFields = (product) => {
  return {
    id: product.id,
    categoryId: product.categoria_id,
    title: product.titulo,
    subtitle: product.subtitulo,
    price: product.precio,
    sku: product.sku,
    url_image: product.imagen,
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

const mapCategoriesByName = (categories) => {
  return categories?.map((category) => ({
    id: category.id,
    name: category.nombre,
  }));
};

const getCategoryNameById = (categories, categoryId) => {
  return categories.find((category) => category.id === Number(categoryId))?.name;
};

const getProductsByCategory = (products, categoryId) => {
  return products[categoryId];
};

const getProductTitleById = (productsByCategory, productId) => {
  return productsByCategory?.find((product) => product.id === Number(productId))?.title;
};

const mapProductDetailsFields = (product) => {
  return {
    id: product.id,
    sku: product.sku,
    categoryId: product.categoria_id,
    title: product.titulo,
    subtitle: product.subtitulo,
    price: product.precio,
    url_image: product.imagen,
    description: product.descripcion,
  };
};

export {
  mapProductsByCategory,
  getCategoryNameById,
  getProductsByCategory,
  getProductTitleById,
  mapCategoriesByName,
  mapProductDetailsFields,
};
