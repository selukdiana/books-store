import React from 'react';
import { useDispatch } from 'react-redux';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import './order-item.css';
import { IBook } from '../../types';
import { BookCover } from '../book-cover';
import { getItemFromCart } from '../../store/actions';

export interface IOrderItemProps {
  book: IBook;
}

export const OrderItem = ({ book }: IOrderItemProps) => {
  const dispatch = useDispatch();
  const handleDeleteClick = () => {
    dispatch(getItemFromCart(book));
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
        <span>{book.price} руб.</span>
        <AiOutlineCloseCircle
          size={25}
          className="cart-item__delete-icon"
          onClick={handleDeleteClick}
        />
      </div>
    </div>
  );
};
