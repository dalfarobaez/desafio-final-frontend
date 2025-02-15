import { FaBoxes } from 'react-icons/fa';
import { IoLogOutOutline } from 'react-icons/io5';
import { RiAddBoxFill } from 'react-icons/ri';
import { ForkWhiteIcon } from '../icons';
import { LogOut, MenuElement, SideMenuContainer } from './SideMenu.styles';

const menuItems = [
  {
    name: 'Agregar producto',
    path: '/backoffice/agregar-producto',
    icon: <RiAddBoxFill />,
  },
  {
    name: 'Inventario',
    path: '/backoffice/inventario',
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
