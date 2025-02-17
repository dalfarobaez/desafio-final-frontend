import PropTypes from "prop-types";
import { createContext } from "react";
import useUser from "../hooks/useUser";

export const AdminContext = createContext({});

export const AdminContextProvider = ({ children }) => {
  const { user, token, setToken, isAuthLoading, logOutUser } = useUser();
  return (
    <AdminContext.Provider
      value={{ user, token, setToken, isAuthLoading, logOutUser }}
    >
      {children}
    </AdminContext.Provider>
  );
};

AdminContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
