import styled from 'styled-components';
import HeroImage from '../../assets/BANNER.jpg';

const HeroImageStyled = styled.img.attrs({
  src: HeroImage,
  alt: 'Hero image',
})`
  height: 350px;
  width: 100%;
  object-fit: cover;
`;

export { HeroImageStyled };
