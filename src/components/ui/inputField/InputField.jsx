import PropTypes from "prop-types";
import { useField } from "formik";
import { Input, InputContainer, ErrorMessage } from "./inputField.styles";

const InputField = ({ label, showError, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <InputContainer>
      <Input {...field} {...props} $error={meta.touched && meta.error} />
      {meta.touched && meta.error && showError ? (
        <ErrorMessage>
          <p>{meta.error}</p>
        </ErrorMessage>
      ) : null}
    </InputContainer>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  showError: PropTypes.bool,
};

export default InputField;
