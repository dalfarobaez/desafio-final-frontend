import axios from 'axios';

const BASE_URL = 'https://desafio-final-backend-api.onrender.com';

const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

axiosClient.interceptors.response.use(
  function (response) {
    // Cualquier código de estado dentro del rango de 2xx hace que esta función se dispare
    return response;
  },
  function (error) {
    // Cualquier código de estado fuera del rango de 2xx hace que esta función se dispare
    const apiError = error.response ? error.response.data.error : error.message;
    const customError = {
      error: apiError || 'An error occurred',
    };
    return Promise.reject(customError);
  }
);

export default axiosClient;
