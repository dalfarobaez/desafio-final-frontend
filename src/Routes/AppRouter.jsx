import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import StoreLayout from "../layouts/StoreLayout/StoreLayout";
import {
  HomePage,
  ProductCategoryPage,
  ProductDetailsPage,
  LoginPage,
  RegisterPage,
  ProfilePage,
  CartPage,
  CheckoutPage,
  NotFoundPage,
} from "../pages";
import AdminLayout from "../layouts/AdminLayout/AdminLayout";
import Inventory from "../pages/backoffice/Inventory/Inventory";
import NewProduct from "../pages/backoffice/NewProduct/NewProduct";
import EditProduct from "../pages/backoffice/EditProduct/EditProduct";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<StoreLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/categoria/:categoryId"
            element={<ProductCategoryPage />}
          />
          <Route path="/producto/:productId" element={<ProductDetailsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/mi-perfil" element={<ProfilePage />} />
          <Route path="/carrito" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route element={<AdminLayout />}>
          <Route path="/backoffice/inventario" element={<Inventory />} />
          <Route path="/backoffice/agregar-producto" element={<NewProduct />} />
          <Route path="/backoffice/editar-producto" element={<EditProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
