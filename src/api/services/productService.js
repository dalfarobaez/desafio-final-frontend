import categoriesJSON from '../../mocks/categories.json';
import axiosClient from '../axiosClient';

const getCategories = async () => {
  // return new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve(categoriesJSON);
  //   }, 3000);
  // });
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

export { getCategories, getAllProducts };
