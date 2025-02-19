import Cookies from 'js-cookie';
import axiosClient from '../axiosClient';

const login = async ({ email, password }) => {
  try {
    const { data = [] } = await axiosClient.post('/login', {
      email,
      password,
    });

    if (data?.token.length) {
      Cookies.set('token', data.token, {
        expires: 7,
        secure: true,
        sameSite: 'Strict',
      });
    }

    return data.token;
  } catch (error) {
    console.error(error);
    throw new error();
  }
};

const register = async ({ email, password, firstname, lastname, phone }) => {
  try {
    const { data = [] } = await axiosClient.post('/register', {
      email,
      password,
      nombre: firstname,
      apellido: lastname,
      telefono: phone,
    });

    if (data?.token.length) {
      Cookies.set('token', data.token, {
        expires: 7,
        secure: true,
        sameSite: 'Strict',
      });
    }

    return data.token;
  } catch (error) {
    console.error(error);
    throw new error();
  }
};

export { login, register };
