import React from 'react';
import { IRatingProps } from '../../types/props';
import './Rating.css';
import { StarIcon } from './StarIcon';

export const Rating = ({ rating }: IRatingProps) => {
  const grade = Number(rating);

  const stars = new Array();
  stars.length = 5;
  stars.fill(false);
  for (let i = 0; i < grade; i++) {
    stars[i] = true;
  }

  return (
    <div className="rating">
      {stars.map((star, index) => {
        return star ? (
          <StarIcon type="filled" key={index} />
        ) : (
          <StarIcon type="outlined" key={index} />
        );
      })}
    </div>
  );
};
