import { useDispatch } from "react-redux";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./OrderItem.css";
import { BookCover } from "../BookCover";
import { type IOrderItemProps } from "../../types/props";
import { getItemFromCart } from "../../store/slices/cartSlice";

export const OrderItem = ({ book }: IOrderItemProps) => {
  const dispatch = useDispatch();
  const handleDeleteClick = () => {
    dispatch(getItemFromCart(book.isbn13));
  };
  return (
    <div className="order-item">
      <div className="order-item__cover">
        <BookCover image={book.image} />
      </div>
      <div className="order-item__title">
        <span> {book.title} </span>
      </div>
      <div className="order-item__price">
        <span>{book.price}</span>
        <AiOutlineCloseCircle
          size={25}
          className="cart-item__delete-icon"
          onClick={handleDeleteClick}
        />
      </div>
    </div>
  );
};
