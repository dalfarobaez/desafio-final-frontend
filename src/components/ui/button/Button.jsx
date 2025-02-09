import PropTypes from "prop-types";
import { ButtonStyled } from "./Button.styled";

const Button = ({ children, background, textColor, width }) => {
  return (
    <ButtonStyled background={background} textColor={textColor} width={width}>
      {children}
    </ButtonStyled>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  background: PropTypes.string,
  textColor: PropTypes.string,
  width: PropTypes.string,
};

export default Button;
