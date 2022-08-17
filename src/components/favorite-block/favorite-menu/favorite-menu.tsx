import React from 'react';
import { useSelector } from 'react-redux';
import { IRootState } from '../../../store/types';
import { IFavoriteMenuProps } from '../../../types/props';
import { calcTotalPrice } from '../../../utils';
import { Button } from '../../button';
import { FavoriteItem } from './favorite-item';
import './favorite-menu.css';

export const FavoriteMenu = ({ onClick }: IFavoriteMenuProps) => {
  const items = useSelector((state: IRootState) => state.favorite.books);
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
          : 'Нет избранных товаров'}
      </div>
      {items.length > 0 ? (
        <div className="favorite-menu__arrange">
          <Button type="secondary" size="m" onClick={onClick}>
            Очистить
          </Button>
        </div>
      ) : null}
    </div>
  );
};
