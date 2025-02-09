import PropTypes from 'prop-types';
import { BreadcrumbsStyled } from './Breadcrumbs.styles';

const BreadCrumbs = ({ category, product }) => {
  return (
    <BreadcrumbsStyled>
      <p className={!category && !product ? 'active' : ''}>Inicio</p>
      {category && (
        <>
          <p>/</p>
          <p className={category && !product ? 'active' : ''}>{category}</p>
        </>
      )}
      {product && (
        <>
          <p>/</p>
          <p className={category && product ? 'active' : ''}>{product}</p>
        </>
      )}
    </BreadcrumbsStyled>
  );
};

BreadCrumbs.propTypes = {
  category: PropTypes.string,
  product: PropTypes.string,
};

BreadCrumbs.defaultProps = {
  category: null,
  product: null,
};

export default BreadCrumbs;
