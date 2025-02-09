import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { FiltersStyled } from './Filters.styles';

const Filters = () => {
  return (
    <FiltersStyled>
      <p>Ordenar Por:</p>
      <p>
        Precio Mayor a menor
        <MdOutlineKeyboardArrowDown />
      </p>
    </FiltersStyled>
  );
};

export default Filters;
