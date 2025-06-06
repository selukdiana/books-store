import { type IRatingProps } from "../../types/props";
import "./Rating.css";
import { StarIcon } from "./StarIcon";

export const Rating = ({ rating }: IRatingProps) => {
  const starsNumber = Number(rating);
  const renderStars = [];
  for (let i = 1; i <= 5; i++) {
    renderStars.push(
      i <= starsNumber ? (
        <StarIcon type="filled" key={i} />
      ) : (
        <StarIcon type="outlined" key={i} />
      )
    );
  }

  return <div className="rating">{renderStars}</div>;
};
