import { useState } from "react";
import { MdOutlineFavorite } from "react-icons/md";
import "./FavoriteBlock.css";
import { FavoriteMenu } from "./FavoriteMenu";
import { ItemsInFavorite } from "./ItemsInFavorite";
import { useAppSelector } from "../../store/hooks";

export const FavoriteBlock = () => {
  const items = useAppSelector((state) => state.favorite.books);
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
      {isFavoriteMenuVisible && (
        <FavoriteMenu setIsFavoriteMenuVisible={setIsFavoriteMenuVisible} />
      )}
    </div>
  );
};
