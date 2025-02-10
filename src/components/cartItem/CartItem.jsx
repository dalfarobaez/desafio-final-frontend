import PropTypes from "prop-types";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { formatPrice } from "../../utils/strings";
import {
  CartItemStyle,
  ItemAmount,
  ItemName,
  ItemPrice,
} from "./CartItem.styles";
import { Link } from "react-router-dom";

const CartItem = ({ id, productImg, title, subtitle, price }) => {
  return (
    <CartItemStyle>
      <img src={productImg} alt={title} />
      <ItemName>
        <Link to={`/producto/${id}`}>{title}</Link>
        <p>{subtitle}</p>
      </ItemName>
      <ItemPrice>
        <h2>{formatPrice(price)}</h2>
        <ItemAmount>
          <CiCirclePlus />
          <div>
            <p>2</p>
          </div>
          <CiCircleMinus />
        </ItemAmount>
      </ItemPrice>
    </CartItemStyle>
  );
};

CartItem.PropTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  price: PropTypes.number,
  productImg: PropTypes.string,
};
export default CartItem;
