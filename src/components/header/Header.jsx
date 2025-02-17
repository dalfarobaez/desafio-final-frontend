import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { truncateString } from "../../utils/strings";
import { ForkIcon, LoginIcon, BagIcon } from "../icons";
import MainWrapper from "../layout/MainWrapper";
import {
  LoginContainerStyled,
  UserActionsContainerStyled,
  CartContainerStyled,
  FirstContainerStyled,
  SecondContainerStyled,
  MenuContainerStyled,
  CategoriesListStyled,
  CategoriesOverlayStyled,
} from "./Header.styles";
import { Link } from "react-router-dom";
import useStoreContext from "../../hooks/useStoreContext";
import useMenuActions from "../../hooks/useMenuActions";

import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import useAuthContext from "../../hooks/useAuthContext";

const Header = () => {
  const { categories, categoriesError, categoriesIsLoading } =
    useStoreContext();
  const { isOverlayOpen, handleOverlayToggle } = useMenuActions();

  const { isAuthLoading, user } = useAuthContext();

  return (
    <header>
      <FirstContainerStyled>
        <MainWrapper>
          <Link to="/">
            <ForkIcon />
          </Link>
          <UserActionsContainerStyled>
            <LoginContainerStyled
              to={user.isAuthenticated ? "/mi-perfil" : "/login"}
            >
              <LoginIcon />
              <div>
                <p>¡Hola!</p>
                {user.isAuthenticated ? (
                  <p>
                    {user.isAuthenticated
                      ? `${truncateString(user.data.firstName)} ${truncateString(user.data.lastName)}`
                      : "Inicia sesión"}
                  </p>
                ) : (
                  <p>Inicia sesión</p>
                )}

                <MdOutlineKeyboardArrowDown />
              </div>
            </LoginContainerStyled>
            <CartContainerStyled to="/carrito">
              <BagIcon />
              <span>{8}</span>
              <MdOutlineKeyboardArrowDown />
            </CartContainerStyled>
          </UserActionsContainerStyled>
        </MainWrapper>
      </FirstContainerStyled>
      <SecondContainerStyled>
        <MenuContainerStyled disabled={categoriesIsLoading || categoriesError}>
          <RxHamburgerMenu fontSize={30} onClick={handleOverlayToggle} />
          <p>Productos</p>
        </MenuContainerStyled>
        <CategoriesOverlayStyled
          $isOverlayOpen={isOverlayOpen}
          onClick={handleOverlayToggle}
        >
          <MainWrapper>
            <CategoriesListStyled onClick={(e) => e.stopPropagation()}>
              {categories &&
                categories.map(({ id, name }) => (
                  <Link
                    key={id}
                    onClick={handleOverlayToggle}
                    to={`/categoria/${id}`}
                  >
                    {name}
                  </Link>
                ))}
            </CategoriesListStyled>
          </MainWrapper>
        </CategoriesOverlayStyled>
      </SecondContainerStyled>
    </header>
  );
};

export default Header;
