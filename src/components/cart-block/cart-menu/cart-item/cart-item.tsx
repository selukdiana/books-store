import React from 'react';
import { useDispatch } from 'react-redux';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import './cart-item.css';
import { getItemFromCart } from '../../../../store/actions';
import { ICartItemProps } from '../../../../types/props';

export const CartItem = ({ title, price, book }: ICartItemProps) => {
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    dispatch(getItemFromCart(book));
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
