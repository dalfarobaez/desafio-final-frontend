import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { RxHamburgerMenu } from 'react-icons/rx';
import { truncateString } from '../../utils/strings';
import { ForkIcon, LoginIcon, BagIcon } from '../icons';
import {
  LoginContainerStyled,
  UserActionsContainerStyled,
  CartContainerStyled,
  FirstContainerStyled,
  SecondContainerStyled,
} from './Header.styles';

const Header = () => {
  return (
    <header>
      <FirstContainerStyled>
        <ForkIcon />
        <UserActionsContainerStyled>
          <LoginContainerStyled>
            <LoginIcon />
            <div>
              <p>¡Hola!</p>
              <p>{truncateString('Rodrigo Valenzuela')}</p>
              <MdOutlineKeyboardArrowDown />
            </div>
          </LoginContainerStyled>
          <CartContainerStyled>
            <BagIcon />
            <span>{8}</span>
            <MdOutlineKeyboardArrowDown />
          </CartContainerStyled>
        </UserActionsContainerStyled>
      </FirstContainerStyled>
      <SecondContainerStyled>
        <RxHamburgerMenu fontSize={30} />
      </SecondContainerStyled>
    </header>
  );
};

export default Header;
