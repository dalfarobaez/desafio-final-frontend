import { Form } from 'formik';
import styled from 'styled-components';
import colors from '../../styles/colors';
import FlexContainer from '../layout/FlexContainer';

const ProductFormStyled = styled(FlexContainer)`
  min-height: 100px;
  width: 100%;
  max-width: 600px;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
  position: relative;
  top: 40px;

  h3 {
    font-size: 24px;
    font-weight: 600;
    text-transform: uppercase;
  }
`;

const FormWrapper = styled(FlexContainer)`
  flex-direction: column;
  background-color: ${colors.forkLight};
  padding: 20px;
  border-radius: 15px;
`;

const FormContainer = styled(FlexContainer).attrs({
  as: Form,
})`
  flex-direction: column;
  background-color: ${colors.forkLight};
  padding: 20px;
  border-radius: 15px;
`;

const CheckboxContainer = styled(FlexContainer)`
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 30px;
`;

export { ProductFormStyled, FormWrapper, FormContainer, CheckboxContainer };
