import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { truncateString } from "../../utils/strings";
import { ForkIcon, LoginIcon, BagIcon } from "../icons";
import MainWrapper from "../layout/MainWrapper";
import { RiCloseLargeFill } from "react-icons/ri";

import {
  LoginContainerStyled,
  UserActionsContainerStyled,
  CartContainerStyled,
  FirstContainerStyled,
  SecondContainerStyled,
  MainWrapperContainer,
  CloseOverlay,
  CategoriesList,
  CategoriesOverlay,
} from "./Header.styles";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import FlexContainer from "../layout/FlexContainer";
import colors from "../../styles/colors";

const categoriesList = [
  {
    id: "1",
    category: "Promociones",
  },
  {
    id: "2",
    category: "Platos individuales",
  },
  {
    id: "3",
    category: "Ensaladas & Bowls",
  },
  {
    id: "4",
    category: "Familiares",
  },
  {
    id: "5",
    category: "Panadería",
  },
  {
    id: "6",
    category: "Postres",
  },
  {
    id: "7",
    category: "Aperitivos",
  },
  {
    id: "8",
    category: "Desayunos & Brunch",
  },
  {
    id: "9",
    category: "Empanadas",
  },
  {
    id: "10",
    category: "Bebestibles",
  },
  {
    id: "11",
    category: "Dulces y snacks",
  },
  {
    id: "12",
    category: "Pastelería",
  },
];

const Header = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const handleOverlayToggle = () =>
    setIsOverlayOpen(() => (isOverlayOpen ? false : true));

  return (
    <header>
      <FirstContainerStyled>
        <MainWrapper>
          <Link to="/">
            <ForkIcon />
          </Link>

          <UserActionsContainerStyled>
            <LoginContainerStyled to="/mi-perfil">
              <LoginIcon />
              <div>
                <p>¡Hola!</p>
                <p>{truncateString("Rodrigo Valenzuela")}</p>
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
        <MainWrapperContainer>
          <RxHamburgerMenu fontSize={30} onClick={handleOverlayToggle} />
          <p>Productos</p>
        </MainWrapperContainer>
        <CategoriesOverlay
          $isOverlayOpen={isOverlayOpen}
          onClick={handleOverlayToggle}
        >
          <CloseOverlay>
            <RiCloseLargeFill onClick={handleOverlayToggle} />
          </CloseOverlay>
          <CategoriesList onClick={(e) => e.stopPropagation()}>
            {categoriesList.map((item) => (
              <Link
                key={item.id}
                onClick={handleOverlayToggle}
                to={`/categoria/${item.id}`}
              >
                {item.category}
              </Link>
            ))}
          </CategoriesList>
        </CategoriesOverlay>
      </SecondContainerStyled>
    </header>
  );
};

export default Header;
