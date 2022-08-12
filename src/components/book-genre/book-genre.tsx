import React from 'react';
import './book-genre.css';

export const BookGenre = ({ genre = '' }) => {
  return genre ? <span className="book-genre">{genre}</span> : <span></span>;
};
