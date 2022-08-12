import React from 'react';
import './book-cover.css';

export const BookCover = ({ image = '' }) => {
  return (
    <div className="book-cover" style={{ backgroundImage: `url(${image})` }} />
  );
};
