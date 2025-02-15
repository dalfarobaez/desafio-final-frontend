import categoriesJSON from '../../mocks/categories.json';
import productsJSON from '../../mocks/products.json';
import axiosClient from '../axiosClient';

const getCategories = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(categoriesJSON);
    }, 1000);
  });
  // try {
  //   const { data = [] } = await axiosClient.get('/categories');
  //   return data;
  // } catch (error) {
  //   console.error(error);
  //   throw new error();
  // }
};

const getAllProducts = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productsJSON);
    }, 3000);
  });
  // try {
  //   const { data = [] } = await axiosClient.get('/products/all');
  //   return data;
  // } catch (error) {
  //   console.error(error);
  //   throw new error();
  // }
};

export { getCategories, getAllProducts };
