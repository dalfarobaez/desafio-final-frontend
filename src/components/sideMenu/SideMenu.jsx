import styled from "styled-components";
import FlexContainer from "../layout/FlexContainer";
import colors from "../../styles/colors";
import { Link } from "react-router-dom";
import { FaBoxes } from "react-icons/fa";
import { RiAddBoxFill } from "react-icons/ri";
import { IoLogOutOutline } from "react-icons/io5";
import { ForkWhiteIcon } from "../icons";

const menuItems = [
  {
    name: "Agregar producto",
    path: "/backoffice/agregar-producto",
    icon: <RiAddBoxFill />,
  },
  {
    name: "Inventario",
    path: "/backoffice/inventario",
    icon: <FaBoxes />,
  },
];

const SideMenu = () => {
  return (
    <SideMenuContainer>
      <ForkWhiteIcon />
      {menuItems.map((item) => {
        return (
          <MenuElement key={item.name} to={item.path}>
            {item.icon}
            <p>{item.name}</p>
          </MenuElement>
        );
      })}
      <LogOut>
        <IoLogOutOutline />
        <p>Cerrar sesión</p>
      </LogOut>
    </SideMenuContainer>
  );
};

export default SideMenu;

const SideMenuContainer = styled(FlexContainer)`
  width: 210px;
  background-color: ${colors.forkBlack};
  flex-direction: column;
  padding: 20px 15px;
  > svg {
    transform: scale(0.8);
    margin: 0 auto;
    margin-bottom: 20px;
  }
`;

const MenuElement = styled(FlexContainer).attrs({
  as: Link,
})`
  justify-content: flex-start;
  align-items: center;
  height: 38px;
  transition: opacity 100ms ease-in;
  gap: 10px;
  &:hover {
    opacity: 0.7;
  }
  p,
  svg {
    color: ${colors.forkWhite};
  }
  p {
    font-size: 14px;
  }
  svg {
    font-size: 20px;
  }
`;
const LogOut = styled(MenuElement).attrs({ as: "div" })`
  cursor: pointer;
  margin-top: auto;
  border-top: 1px solid ${colors.forkLight};
`;
