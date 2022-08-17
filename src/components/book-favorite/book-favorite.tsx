import React, { MouseEventHandler, useState } from 'react';
import './book-favorite.css';
import { IBookBuyProps } from '../../types';
import { Button } from '../button';
import { useDispatch, useSelector } from 'react-redux';
import {
  getItemFromCart,
  getItemFromFavorite,
  setItemInCart,
  setItemInFavorite,
} from '../../store/actions';
import { IRootState } from '../../store/types';
import { FavoriteButton } from '../../favorite-button';

export const BookFavorite = (book: IBookBuyProps) => {
  const dispatch = useDispatch();
  const items = useSelector((state: IRootState) => state.favorite.books);
  const [isItemFavorite, setIsItemFavorite] = useState(
    items.some((item) => item.isbn13 == book.book.isbn13)
  );

  const handleClick = (event: React.MouseEvent<SVGElement>) => {
    event.stopPropagation();
    setIsItemFavorite(!isItemFavorite);
    isItemFavorite
      ? dispatch(getItemFromFavorite(book.book))
      : dispatch(setItemInFavorite(book.book));
  };

  return (
    <div className="book-favorite">
      <FavoriteButton
        type={isItemFavorite ? 'primary' : 'secondary'}
        onClickHandler={handleClick}
      />
    </div>
  );
};
