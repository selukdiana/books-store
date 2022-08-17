import React from 'react';
import { useDispatch } from 'react-redux';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import './favorite-item.css';
import {
  getItemFromCart,
  getItemFromFavorite,
} from '../../../../store/actions';
import { IFavoriteItemProps } from '../../../../types/props';

export const FavoriteItem = ({ title, price, book }: IFavoriteItemProps) => {
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    dispatch(getItemFromFavorite(book));
  };

  return (
    <div className="favorite-item">
      <span className="favorite-item__title">{title} </span>
      <div className="favorite-item__price">
        <span>{price} руб.</span>
        <AiOutlineCloseCircle
          size={15}
          className="favorite-item__delete-icon"
          onClick={handleDeleteClick}
        />
      </div>
    </div>
  );
};
