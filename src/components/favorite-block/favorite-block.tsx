import React, { MouseEvent, useEffect, useRef, useState } from 'react';

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
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const checkIfClickedOutside = (e: Event | undefined): any => {
      // debugger;
      // e?.stopPropagation();
      console.log(ref.current);
      const favMenu = document.querySelector('.favorite-menu');
      console.log(favMenu);
      if (
        isFavoriteMenuVisible &&
        ref.current &&
        !favMenu?.contains(
          (e?.target as HTMLElement) || (e?.target as SVGElement)
        ) &&
        !ref.current.contains(
          (e?.target as SVGElement) || (e?.target as HTMLElement)
        )
      ) {
          // setIsFavoriteMenuVisible(false);
      }
    };

    document.addEventListener('click', checkIfClickedOutside);

    return () => {
      document.removeEventListener('click', checkIfClickedOutside);
    };
  }, [isFavoriteMenuVisible]);

  return (
    <div className="favorite-block" ref={ref}>
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
