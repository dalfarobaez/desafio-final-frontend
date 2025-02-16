import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminLayout from '../layouts/AdminLayout/AdminLayout';
import StoreLayout from '../layouts/StoreLayout/StoreLayout';
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
} from '../pages';
import EditProductPage from '../pages/backoffice/EditProduct/EditProductPage';
import InventoryPage from '../pages/backoffice/Inventory/InventoryPage';
import NewProductPage from '../pages/backoffice/NewProduct/NewProductPage';
import { AdminContextProvider } from '../context/AdminProvider';
import { StoreContextProvider } from '../context/StoreProvider';
import AdminLogin from '../pages/backoffice/AdminLogin/AdminLogin';
import AdminRoute from './AdminRoute';
import PrivateRoute from './PrivateRoute';
import AuthRoute from './AuthRoute';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <StoreContextProvider>
              <StoreLayout />
            </StoreContextProvider>
          }
        >
          <Route path='/' element={<HomePage />} />
          <Route path='/categoria/:categoryId' element={<ProductCategoryPage />} />
          <Route path='/categoria/:categoryId/producto/:productId' element={<ProductDetailsPage />} />
          {/* Rutas publicas */}
          <Route element={<AuthRoute />}>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
          </Route>
          {/* Rutas privadas */}
          <Route element={<PrivateRoute />}>
            <Route path='/mi-perfil' element={<ProfilePage />} />
            <Route path='/carrito' element={<CartPage />} />
            <Route path='/checkout' element={<CheckoutPage />} />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Route>
        <Route path='/backoffice/login' element={<AdminLogin />} />
        {/* Rutas Admin */}
        <Route element={<AdminRoute />}>
          <Route
            element={
              <AdminContextProvider>
                <AdminLayout />
              </AdminContextProvider>
            }
          >
            <Route path='/backoffice/inventario' element={<InventoryPage />} />
            <Route path='/backoffice/agregar-producto' element={<NewProductPage />} />
            <Route path='/backoffice/editar-producto/:productId' element={<EditProductPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
