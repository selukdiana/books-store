import React from 'react';
import './rating.css';
import { StarIcon } from './star-icon';

interface IRatingProps {
  rating?: string;
}

export const Rating = ({ rating }: IRatingProps) => {
  const grade = Number(rating);
  console.log(`Rating: ${grade}`);
  const stars = new Array();
  stars.length = 5;
  stars.fill(false);
  for (let i = 0; i < grade; i++) {
    stars[i] = true;
  }
  console.log(stars);
  return (
    <div className="rating">
      {stars.map((star) => {
        return star ? <StarIcon type="filled" /> : <StarIcon type="outlined" />;
      })}
    </div>
  );
};
