import PropTypes from "prop-types";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { formatPrice } from "../../utils/strings";
import {
  CartItemStyle,
  ItemAmount,
  ItemName,
  ItemPrice,
} from "./CartItem.styles";

const CartItem = ({ productImg, title, subtitle, price }) => {
  return (
    <CartItemStyle>
      <img src={productImg} alt={title} />
      <ItemName>
        <h2>{title}</h2>
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
  title: PropTypes.string,
  subtitle: PropTypes.string,
  price: PropTypes.number,
  productImg: PropTypes.string,
};
export default CartItem;
