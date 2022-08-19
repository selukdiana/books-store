import React, { Dispatch, SetStateAction } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearFavorite } from '../../../store/actions';
import { IRootState } from '../../../store/types';

import { calcTotalPrice } from '../../../utils/calcTotalPrice';
import { Button } from '../../button';
import { FavoriteItem } from './favorite-item';
import './favorite-menu.css';

export const FavoriteMenu = () => {
  const items = useSelector((state: IRootState) => state.favorite.books);

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(clearFavorite());
  };

  return (
    <div className="favorite-menu">
      <div className="favorite-menu__books-list">
        {items.length > 0
          ? items.map((book) => (
              <FavoriteItem
                key={book.image}
                image={book.image}
                price={book.price}
                title={book.title}
                book={book}
              />
            ))
          : 'You have no Saved Items'}
      </div>
      {items.length > 0 ? (
        <div className="favorite-menu__arrange">
          <Button type="secondary" size="m" onClick={handleClick}>
            Clear
          </Button>
        </div>
      ) : null}
    </div>
  );
};
