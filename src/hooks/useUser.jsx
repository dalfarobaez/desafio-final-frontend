import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { ADMIN_ROLE_ID } from "../utils/constants";

const initialState = {
  data: {
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
  },
  isAdmin: false,
  isAuthenticated: false,
};

const useUser = () => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(initialState);
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  const logOutUser = () => {
    Cookies.remove("token");
    setToken(null);
    setUser(initialState);
  };

  useEffect(() => {
    const storedToken = Cookies.get("token");

    if (storedToken) {
      try {
        const decoded = jwtDecode(storedToken);
        const isTokenValid = decoded.exp > Date.now() / 1000;
        if (isTokenValid) {
          const { email, firstName, lastName, phone, roleId } = decoded;
          setUser({
            data: {
              email,
              firstName,
              lastName,
              phone,
            },
            isAuthenticated: true,
            isAdmin: roleId === ADMIN_ROLE_ID ? true : false,
          });
          setToken(storedToken);
        } else {
          Cookies.remove("token");
          setToken(null);
          setUser(initialState);
        }
      } catch (error) {
        console.error("Error decoding token:", error);
        Cookies.remove("token");
        setToken(null);
        setUser(initialState);
      }
    }
    setIsAuthLoading(false);
  }, [token]);

  return {
    user,
    token,
    setToken,
    isAuthLoading,
    logOutUser,
  };
};

export default useUser;
