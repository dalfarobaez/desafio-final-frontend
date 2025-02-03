import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import colors from '../../styles/colors';
import { ForkWhiteIcon, LeftStainIcon, RightStainIcon } from '../icons';
import { FooterStyled, SocialIconsContainerStyled } from './Footer.styles';

const Footer = () => {
  return (
    <FooterStyled>
      <ForkWhiteIcon />
      <SocialIconsContainerStyled>
        <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>
          <FaFacebookSquare color={colors.forkSecondary} fontSize={30} />
        </a>
        <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>
          <FaInstagram color={colors.forkSecondary} fontSize={30} />
        </a>
      </SocialIconsContainerStyled>
      <p>Av. Américo Vespucio 1710, Quilicura. Chile.</p>
      <p>© Better Food SpA.</p>
      <LeftStainIcon />
      <RightStainIcon />
    </FooterStyled>
  );
};

export default Footer;
