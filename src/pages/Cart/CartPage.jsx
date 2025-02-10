import colors from "../../styles/colors";
import CartItem from "../../components/cartItem/CartItem";
import Button from "../../components/ui/button/Button";
import { formatPrice } from "../../utils/strings";
import { Cart, CartContainer, ItemList, Total } from "./CartPage.styles";

const cartItems = [
  {
    id: "1",
    title: "Beef bourguignon",
    subtitle: "Con champiñones y tocino, 4 porciones",
    productImg:
      "https://corpora-fork.s3.amazonaws.com/back_img/PTPP01279-beef-bourguignon-fam-frontal-830-1732567123448.jpg",
    price: 18990,
  },
  {
    id: "2",
    title: "Ensalada César Pollo",
    subtitle: "Con palta",
    productImg:
      "https://corpora-fork.s3.amazonaws.com/back_img/cesar%20palta-1738596148504.jpg",
    price: 7990,
  },
];

const CartPage = () => {
  return (
    <CartContainer>
      <Cart>
        <ItemList>
          {cartItems && cartItems.length > 0 ? (
            cartItems.map((item) => {
              return (
                <CartItem
                  key={item.title + item.id}
                  id={item.id}
                  price={item.price}
                  productImg={item.productImg}
                  subtitle={item.subtitle}
                  title={item.title}
                />
              );
            })
          ) : (
            <div>No hay productos en el carro</div>
          )}
        </ItemList>
        <Total>
          <h2>Total:</h2>
          <div>
            <p>{formatPrice(40000)}</p>
            <Button width="150px" background={colors.forkPrimary}>
              HACER PEDIDO
            </Button>
          </div>
        </Total>
      </Cart>
    </CartContainer>
  );
};

export default CartPage;
