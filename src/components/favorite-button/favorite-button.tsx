import React, { MouseEventHandler } from 'react';
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from 'react-icons/md';
import './favorite-button.css';

interface IFavoriteButtonProps {
  onClickHandler?: MouseEventHandler<SVGElement>;
  type: string;
  size?: string;
}

export const FavoriteButton = ({
  onClickHandler,
  type,
}: IFavoriteButtonProps) => {
  const isPrimary = type === 'primary';
  return isPrimary ? (
    <MdOutlineFavorite onClick={onClickHandler} color="red" size={25} />
  ) : (
    <MdOutlineFavoriteBorder onClick={onClickHandler} color="white" size={25} />
  );
};
