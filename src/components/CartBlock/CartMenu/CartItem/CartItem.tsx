import { useDispatch } from "react-redux";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./CartItem.css";
import { type ICartItemProps } from "../../../../types/props";
import { getItemFromCart } from "../../../../store/slices/cartSlice";

export const CartItem = ({ title, price, book }: ICartItemProps) => {
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    dispatch(getItemFromCart(book.isbn13));
  };

  return (
    <div className="cart-item">
      <span className="cart-item__title">{title} </span>
      <div className="cart-item__price">
        <span>{price}</span>
        <AiOutlineCloseCircle
          size={15}
          className="cart-item__delete-icon"
          onClick={handleDeleteClick}
        />
      </div>
    </div>
  );
};
