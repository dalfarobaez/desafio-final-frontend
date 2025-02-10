import { Outlet } from "react-router-dom";
import SideMenu from "../../components/sideMenu/SideMenu";
import AdminLayoutStyled from "./AdminLayout.styles";
const AdminLayout = () => {
  return (
    <AdminLayoutStyled>
      <SideMenu />
      <Outlet />
    </AdminLayoutStyled>
  );
};

export default AdminLayout;
