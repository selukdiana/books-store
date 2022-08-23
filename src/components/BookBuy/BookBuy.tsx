import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItemFromCart, setItemInCart } from '../../store/actions';
import { IRootState } from '../../store/types';
import './BookBuy.css';
import { IBookProps } from '../../types/props';
import { Button } from '../Button';

export const BookBuy = (book: IBookProps) => {
  const dispatch = useDispatch();
  const items = useSelector((state: IRootState) => state.cart.books);
  const isItemInCart = items.some((item) => item.isbn13 == book.book.isbn13);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();

    isItemInCart
      ? dispatch(getItemFromCart(book.book))
      : dispatch(setItemInCart(book.book));
  };

  return (
    <div className="book-buy">
      <span className="book-buy__price">{book.book.price}</span>
      <Button
        type={isItemInCart ? 'secondary' : 'primary'}
        onClick={handleClick}
      >
        {isItemInCart ? 'Remove from Cart' : 'Add to Cart'}
      </Button>
    </div>
  );
};
