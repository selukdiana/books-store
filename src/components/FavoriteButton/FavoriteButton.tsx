import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import { type IFavoriteButtonProps } from "../../types/props";
import "./FavoriteButton.css";

export const FavoriteButton = ({
  onClickHandler,
  type,
}: IFavoriteButtonProps) => {
  const isPrimary = type === "primary";
  return isPrimary ? (
    <MdOutlineFavorite onClick={onClickHandler} color="red" size={25} />
  ) : (
    <MdOutlineFavoriteBorder onClick={onClickHandler} color="white" size={25} />
  );
};
