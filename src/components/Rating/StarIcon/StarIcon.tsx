import React from 'react';
import './StarIcon.css';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { IStarIconProps } from '../../../types/props';

export const StarIcon = ({ type }: IStarIconProps) => {
  if (type == 'filled') {
    return <AiFillStar className="star-icon" />;
  } else {
    return <AiOutlineStar className="star-icon" />;
  }
};
