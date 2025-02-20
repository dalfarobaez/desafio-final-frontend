import { FaBoxes } from 'react-icons/fa';
import { IoLogOutOutline } from 'react-icons/io5';
import { RiAddBoxFill } from 'react-icons/ri';
import { ForkWhiteIcon } from '../icons';
import { useNavigate } from 'react-router-dom';
import { LogOut, MenuElement, SideMenuContainer, WelcomeText } from './SideMenu.styles';
import useAuthContext from '../../hooks/useAuthContext';
import { truncateString } from '../../utils/strings';

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
  const { logoutUser, user } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate('/backoffice/login');
  };

  return (
    <SideMenuContainer>
      <ForkWhiteIcon />
      <WelcomeText>
        <p>¡Bienvenido!</p>
        <p>{user && truncateString(`${user.data.firstName} ${user.data.lastName}`)}</p>
      </WelcomeText>
      {menuItems.map((item) => {
        return (
          <MenuElement key={item.name} to={item.path}>
            {item.icon}
            <p>{item.name}</p>
          </MenuElement>
        );
      })}
      <LogOut onClick={handleLogout}>
        <IoLogOutOutline />
        <p>Cerrar sesión</p>
      </LogOut>
    </SideMenuContainer>
  );
};

export default SideMenu;
