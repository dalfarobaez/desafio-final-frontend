import styled from 'styled-components';

// Contenedor flexible
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: ${(props) => props.wrap || 'nowrap'};
  justify-content: ${(props) => props.justifyContent || 'flex-start'};
  align-items: ${(props) => props.alignItems || 'stretch'};
  gap: ${(props) => props.gap || '0'};
  flex-direction: ${(props) => props.direction || 'row'};
`;

export default FlexContainer;
