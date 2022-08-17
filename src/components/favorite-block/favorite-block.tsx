import React, { useState } from 'react';

import { MdOutlineFavorite } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { IRootState } from '../../store/types';
import { IBook } from '../../types';
import './favorite-block.css';
import { FavoriteMenu } from './favorite-menu';
import { ItemsInFavorite } from './items-in-favorite';

export const FavoriteBlock = () => {
  const items: Array<IBook> = useSelector<IRootState, Array<IBook>>(
    (state) => state.favorite.books
  );
  const [isFavoriteMenuVisible, setIsFavoriteMenuVisible] = useState(false);

  return (
    <div className="favorite-block">
      <ItemsInFavorite quantity={items.length} />
      <MdOutlineFavorite
        color="white"
        size={25}
        className="favorite-icon"
        onClick={() => {
          setIsFavoriteMenuVisible(!isFavoriteMenuVisible);
        }}
      />
      {isFavoriteMenuVisible && <FavoriteMenu />}
    </div>
  );
};
