import React from 'react';
import './book-cover.css';

export interface IBookCoverProps {
  image: string;
  size?: string;
}

export const BookCover = ({ image, size }: IBookCoverProps) => {
  return (
    <div className="book-cover" style={{ height: `${size}rem` }}>
      <img src={`${image}`} alt="" />
    </div>
  );
};
