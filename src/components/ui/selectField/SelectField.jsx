import PropTypes from "prop-types";

import { useField } from "formik";
import {
  SelectContainer,
  SelectTitle,
  StyledSelect,
  ErrorMessage,
} from "./SelectField.styles";

const SelectField = ({
  label,
  options,
  placeholder,
  showError,
  showLabel,
  ...props
}) => {
  const [field, meta] = useField(props);
  console.log(meta.error);
  console.log(meta.touched && meta.error && showError);
  return (
    <SelectContainer>
      <SelectTitle>
        {showLabel && <label>{label}</label>}
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
      </SelectTitle>

      {meta.touched ? (
        <ErrorMessage $showLabel={showLabel}>
          <p>{meta.error}</p>
        </ErrorMessage>
      ) : null}
    </SelectContainer>
  );
};

SelectField.prototype = {
  label: PropTypes.string,
  showError: PropTypes.bool,
  showLabel: PropTypes.bool,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SelectField;
