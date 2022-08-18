import React from 'react';
import './star-icon.css';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

interface IStarIconProps {
  type: string;
}

export const StarIcon = ({ type }: IStarIconProps) => {
  if (type == 'filled') {
    return <AiFillStar className="star-icon" />;
  } else {
    return <AiOutlineStar className="star-icon" />;
  }
};
