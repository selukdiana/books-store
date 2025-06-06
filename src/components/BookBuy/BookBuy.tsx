import "./BookBuy.css";
import { type IBookProps } from "../../types/props";
import { Button } from "../Button";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getItemFromCart, setItemInCart } from "../../store/slices/cartSlice";

export const BookBuy = ({ book }: IBookProps) => {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.cart.books);
  const isItemInCart = items.some((item) => item.isbn13 === book.isbn13);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();

    isItemInCart
      ? dispatch(getItemFromCart(book.isbn13))
      : dispatch(setItemInCart(book));
  };

  return (
    <div className="book-buy">
      <span className="book-buy__price">{book.price}</span>
      <Button
        type={isItemInCart ? "secondary" : "primary"}
        onClick={handleClick}
      >
        {isItemInCart ? "Remove from Cart" : "Add to Cart"}
      </Button>
    </div>
  );
};
