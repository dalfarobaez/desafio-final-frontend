import PropTypes from "prop-types";

import { ErrorMessage, useField } from "formik";
import { SelectContainer, StyledSelect } from "./SelectField.styles";

const SelectField = ({ options, placeholder, showError, ...props }) => {
  const [field, meta] = useField(props);
  console.log(meta.error);
  return (
    <SelectContainer>
      <StyledSelect
        {...field}
        {...props}
        $error={meta.touched && meta.error && showError}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option) => {
          return (
            <option key={`${option.value}`} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </StyledSelect>
      {meta.touched && meta.error && showError ? (
        <ErrorMessage>
          <p>{meta.error}</p>
        </ErrorMessage>
      ) : null}
    </SelectContainer>
  );
};

SelectField.prototype = {
  showError: PropTypes.bool,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SelectField;
