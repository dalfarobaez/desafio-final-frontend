import { useField } from 'formik';
import PropTypes from 'prop-types';
import { ErrorMessage } from '../inputField/inputField.styles';
import { CheckboxContainer } from './CheckboxField.styles';

const CheckboxField = ({ label, showError, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <CheckboxContainer>
      <label>
        <span>{label}</span>
        <input {...field} {...props} type='checkbox' checked={field.value} />
      </label>
      {meta.touched && meta.error && showError ? (
        <ErrorMessage>
          <p>{meta.error}</p>
        </ErrorMessage>
      ) : null}
    </CheckboxContainer>
  );
};

CheckboxField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  showError: PropTypes.bool,
};

export default CheckboxField;
