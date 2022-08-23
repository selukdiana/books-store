import React from 'react';
import { IBookCoverProps } from '../../types/props';
import './BookCover.css';

export const BookCover = ({ image, size }: IBookCoverProps) => {
  return (
    <div className="book-cover" style={{ height: `${size}rem` }}>
      <img src={`${image}`} alt="" />
    </div>
  );
};
