import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getItemFromFavorite,
  setItemInFavorite,
} from '../../store/actions';
import { IRootState } from '../../store/types';
import { IBookProps } from '../../types/props';
import { FavoriteButton } from '../FavoriteButton';
import './BookFavorite.css';

export const BookFavorite = (book: IBookProps) => {
  const dispatch = useDispatch();
  const items = useSelector((state: IRootState) => state.favorite.books);
  const isItemFavorite= items.some((item) => item.isbn13 == book.book.isbn13)
  
  const handleClick = (event: React.MouseEvent<SVGElement>) => {
    event.stopPropagation();
    
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
