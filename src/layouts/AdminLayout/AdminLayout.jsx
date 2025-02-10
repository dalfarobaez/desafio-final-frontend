import { Outlet } from "react-router-dom";
import SideMenu from "../../components/sideMenu/SideMenu";
import { AdminLayoutStyled, CustomOutletWrapper } from "./AdminLayout.styles";

const AdminLayout = () => {
  return (
    <AdminLayoutStyled>
      <SideMenu />
      <CustomOutletWrapper>
        <Outlet />
      </CustomOutletWrapper>
    </AdminLayoutStyled>
  );
};

export default AdminLayout;
