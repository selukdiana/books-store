import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router";
import { type ICartMenuProps } from "../../../types/props";
import { calcTotalPrice } from "../../../utils/calcTotalPrice";
import { Button } from "../../Button";
import { CartItem } from "./CartItem";
import "./CartMenu.css";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { clearCart } from "../../../store/slices/cartSlice";

export const CartMenu = ({ setIsCartMenuVisible }: ICartMenuProps) => {
  const items = useAppSelector((state) => state.cart.books);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(clearCart());
  };
  const handleClickOrder = () => {
    navigate("/order");
  };
  const handleCloseBtnClick = () => {
    setIsCartMenuVisible(false);
  };
  return (
    <div className="cart-menu">
      <div className="cart-menu__books-list">
        {items.length > 0
          ? items.map((book) => (
              <CartItem
                key={book.image}
                image={book.image}
                price={book.price}
                title={book.title}
                book={book}
              />
            ))
          : "Your cart is empty"}
      </div>
      {items.length > 0 ? (
        <div className="cart-menu__arrange">
          <div className="cart-menu__total-price">
            <span>Total to pay:</span>
            <span>{`\$${calcTotalPrice(items)}`}</span>
          </div>
          <div className="cart-menu__btns">
            <Button type="primary" size="m" onClick={handleClickOrder}>
              Checkout
            </Button>
            <Button type="secondary" size="m" onClick={handleClick}>
              Clear
            </Button>
          </div>
        </div>
      ) : null}
      <AiOutlineClose
        className="cart-menu__close-btn"
        onClick={handleCloseBtnClick}
      />
    </div>
  );
};
