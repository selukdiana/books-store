import { FavoriteItem } from "./FavoriteItem";
import "./FavoriteMenu.css";
import { AiOutlineClose } from "react-icons/ai";
import { type IFavoriteMenuProps } from "../../../types/props";
import { Button } from "../../Button";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { clearFavorite } from "../../../store/slices/favoriteSlice";

export const FavoriteMenu = ({
  setIsFavoriteMenuVisible,
}: IFavoriteMenuProps) => {
  const items = useAppSelector((state) => state.favorite.books);

  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(clearFavorite());
  };

  const handleCloseBtnClick = () => {
    setIsFavoriteMenuVisible(false);
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
          : "You have no Saved Items"}
      </div>
      {items.length > 0 ? (
        <div className="favorite-menu__arrange">
          <Button type="secondary" size="m" onClick={handleClick}>
            Clear
          </Button>
        </div>
      ) : null}
      <AiOutlineClose
        className="favorite-menu__close-btn"
        onClick={handleCloseBtnClick}
      />
    </div>
  );
};
