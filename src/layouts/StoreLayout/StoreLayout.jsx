import { Outlet } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import { StoreLayoutStyled } from './StoreLayout.styles';

const StoreLayout = () => {
  return (
    <StoreLayoutStyled>
      <Header />
      <Outlet />
      <Footer />
    </StoreLayoutStyled>
  );
};

export default StoreLayout;
