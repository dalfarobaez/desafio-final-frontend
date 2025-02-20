import Cookies from "js-cookie";
import axiosClient from "../axiosClient";

const login = async ({ email, password }) => {
  try {
    const { data = [] } = await axiosClient.post("/login", {
      email,
      password,
    });

    if (data?.token.length) {
      Cookies.set("token", data.token, {
        expires: 7,
        secure: true,
        sameSite: "Strict",
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
    const { data = [] } = await axiosClient.post("/register", {
      email,
      password,
      nombre: firstname,
      apellido: lastname,
      telefono: phone,
    });

    if (data?.token.length) {
      Cookies.set("token", data.token, {
        expires: 7,
        secure: true,
        sameSite: "Strict",
      });
    }

    return data.token;
  } catch (error) {
    console.error(error);
    throw new error();
  }
};

const createProduct = async (
  {
    sku,
    title,
    subtitle,
    description,
    categoryId,
    price,
    active,
    featured,
    stock,
    url_image,
  },
  token
) => {
  try {
    const { data = [] } = await axiosClient.post(
      "/product",
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

const updateProduct = async ({ id, values, token }) => {
  const {
    sku,
    title,
    subtitle,
    description,
    categoryId,
    price,
    active,
    featured,
    stock,
    url_image,
  } = values;

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

export { login, register, createProduct, updateProduct };
