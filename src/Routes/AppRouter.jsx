import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
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

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<StoreLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/categoria/:categoryId' element={<ProductCategoryPage />} />
          <Route path='/producto/:productId' element={<ProductDetailsPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/mi-perfil' element={<ProfilePage />} />
          <Route path='/carrito' element={<CartPage />} />
          <Route path='/checkout' element={<CheckoutPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
