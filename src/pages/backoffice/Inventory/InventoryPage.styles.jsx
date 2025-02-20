import styled from 'styled-components';
import FlexContainer from '../../../components/layout/FlexContainer';
import colors from '../../../styles/colors';

const InventoryContainer = styled(FlexContainer)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 600px;
  padding: 60px 20px;

  h2 {
    margin-bottom: 60px;
  }
`;

const InventoryTable = styled.table`
  max-width: 1200px;
  text-align: left;
  border-collapse: collapse;

  thead {
    border-bottom: 1px solid ${colors.forkLight};
    background-color: ${colors.forkLight};
  }

  th,
  td {
    text-align: left;
    padding: 8px;
  }

  td {
    border-bottom: 1px solid ${colors.forkLight};
  }
`;

const ActionsTable = styled(FlexContainer).attrs({ as: 'td' })`
  text-align: center;
  gap: 10px;

  svg {
    cursor: pointer;
    color: ${colors.forkSecondary};
  }
`;

export { ActionsTable, InventoryContainer, InventoryTable };
