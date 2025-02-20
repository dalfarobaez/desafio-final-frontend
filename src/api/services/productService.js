import { mapProductDetailsFields } from '../../utils/products';
import axiosClient from '../axiosClient';

const getCategories = async () => {
  try {
    const { data = [] } = await axiosClient.get('/categories');
    return data;
  } catch (error) {
    console.error(error);
    throw new error();
  }
};

const getAllProducts = async () => {
  try {
    const { data = [] } = await axiosClient.get('/products/all');
    return data;
  } catch (error) {
    console.error(error);
    throw new error();
  }
};

const getProduct = async (id) => {
  try {
    const { data = [] } = await axiosClient.get(`/products/${id}`);
    const product = mapProductDetailsFields(data[0]);
    product.active = true;
    product.featured = false;
    product.stock = 0;
    return product;
  } catch (error) {
    console.error(error);
    throw new error();
  }
};

const createProduct = async ({ values, token }) => {
  console.log('VALUES', values);
  const { sku, title, subtitle, description, categoryId, price, active, featured, stock, url_image } = values;
  try {
    const { data = [] } = await axiosClient.post(
      '/product',
      {
        sku: sku,
        titulo: title,
        subtitulo: subtitle,
        descripcion: description,
        categoria_id: categoryId,
        precio: price,
        activo: active,
        destacado: featured,
        stock,
        url_img: url_image,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log('error');
    console.error(error);
    throw new error();
  }
};

const updateProduct = async ({ id, values, token }) => {
  const { sku, title, subtitle, description, categoryId, price, active, featured, stock, url_image } = values;

  try {
    const { data = [] } = await axiosClient.put(
      `/product/${id}`,
      {
        sku: sku,
        titulo: title,
        subtitulo: subtitle,
        descripcion: description,
        categoria_id: categoryId,
        precio: price,
        activo: active,
        destacado: featured,
        stock,
        url_img: url_image,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(data);

    return data;
  } catch (error) {
    console.error(error);
    throw new error();
  }
};

export { getCategories, getAllProducts, getProduct, createProduct, updateProduct };
