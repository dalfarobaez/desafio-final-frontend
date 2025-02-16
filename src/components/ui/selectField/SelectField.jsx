import { useField } from "formik";
import PropTypes from "prop-types";
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
  isLoading,
  ...props
}) => {
  const [field, meta] = useField(props);

  return (
    <SelectContainer>
      <SelectTitle>
        {showLabel && <label>{label}</label>}
        <StyledSelect
          {...field}
          {...props}
          disabled={isLoading}
          $error={meta.touched && meta.error && showError}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((option) => {
            return (
              <option key={`${option.id}`} value={option.id}>
                {option.name}
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

SelectField.propTypes = {
  label: PropTypes.string,
  showError: PropTypes.bool,
  showLabel: PropTypes.bool,
  placeholder: PropTypes.string,
  isLoading: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SelectField;
