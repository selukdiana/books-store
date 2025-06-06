import React from "react";
import { type IBookProps } from "../../types/props";
import { FavoriteButton } from "../FavoriteButton";
import "./BookFavorite.css";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  getItemFromFavorite,
  setItemInFavorite,
} from "../../store/slices/favoriteSlice";

export const BookFavorite = ({ book }: IBookProps) => {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.favorite.books);
  const isItemFavorite = items.some((item) => item.isbn13 === book.isbn13);

  const handleClick = (event: React.MouseEvent<SVGElement>) => {
    event.stopPropagation();

    isItemFavorite
      ? dispatch(getItemFromFavorite(book.isbn13))
      : dispatch(setItemInFavorite(book));
  };

  return (
    <div className="book-favorite">
      <FavoriteButton
        type={isItemFavorite ? "primary" : "secondary"}
        onClickHandler={handleClick}
      />
    </div>
  );
};
