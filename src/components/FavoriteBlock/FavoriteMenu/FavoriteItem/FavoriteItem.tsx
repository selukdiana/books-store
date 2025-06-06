import { useDispatch } from "react-redux";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./FavoriteItem.css";
import { type IFavoriteItemProps } from "../../../../types/props";
import { getItemFromFavorite } from "../../../../store/slices/favoriteSlice";

export const FavoriteItem = ({ title, price, book }: IFavoriteItemProps) => {
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    dispatch(getItemFromFavorite(book.isbn13));
  };

  return (
    <div className="favorite-item">
      <span className="favorite-item__title">{title} </span>
      <div className="favorite-item__price">
        <span>{price}</span>
        <AiOutlineCloseCircle
          size={15}
          className="favorite-item__delete-icon"
          onClick={handleDeleteClick}
        />
      </div>
    </div>
  );
};
