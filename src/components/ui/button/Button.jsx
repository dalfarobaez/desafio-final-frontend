import PropTypes from 'prop-types';
import { ButtonStyled } from './Button.styles';

const Button = ({ children, background, textColor, width, disabled, onClick }) => {
  return (
    <ButtonStyled $background={background} $textColor={textColor} $width={width} disabled={disabled} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  background: PropTypes.string,
  textColor: PropTypes.string,
  width: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
