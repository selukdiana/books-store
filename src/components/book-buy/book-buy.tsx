import React from 'react';
import './book-buy.css';
import { IBookBuyProps } from '../../types';
import { Button } from '../button';

export const BookBuy = (book: IBookBuyProps) => {
  const isItemInCart = true;
  return (
    <div className="book-buy">
      <span className="book-buy__price">{book.book.price}</span>
      <Button
        type={isItemInCart ? 'secondary' : 'primary'}
        // onClick={handleClick}
      >
        {/* {isItemInCart ? 'Убрать из корзины' : 'В Корзину'} */}
        {['В Корзину']}
      </Button>
    </div>
  );
};
