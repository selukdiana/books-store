import React, { MouseEventHandler } from 'react';
import './book-buy.css';
import { IBookBuyProps } from '../../types';
import { Button } from '../button';
import { useDispatch, useSelector } from 'react-redux';
import { getItemFromCart, setItemInCart } from '../../store/actions';
import { IRootState } from '../../store/types';

export const BookBuy = (book: IBookBuyProps) => {
  const dispatch = useDispatch();
  const items = useSelector((state: IRootState) => state.cart.books);
  const isItemInCart = items.some((item) => item.isbn13 == book.book.isbn13);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    // console.log('handle');
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
        {isItemInCart ? 'Убрать из корзины' : 'В Корзину'}
      </Button>
    </div>
  );
};
