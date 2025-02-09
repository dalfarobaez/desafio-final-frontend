import styled from 'styled-components';
import device from '../../styles/breakpoints';

const ProductGrid = styled.div`
  display: grid;
  gap: 16px;
  padding: 16px;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  grid-template-columns: 1fr;

  @media ${device.md} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.lg} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export default ProductGrid;
