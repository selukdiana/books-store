import React from 'react';
import { BookGenre } from '../BookGenre';
import { BookBuy } from '../BookBuy';
import { BookCover } from '../BookCover';
import { BookFavorite } from '../BookFavorite';
import { useNavigate } from 'react-router-dom';
import './BookItem.css';
import { IBookProps } from '../../types/props';

export const BookItem = (book: IBookProps) => {
  const bookItem = book.book;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/app/${bookItem.isbn13}`);
  };

  return (
    <div className="book-item" onClick={handleClick}>
      <div className="book-item__details">
        <BookCover image={bookItem.image} />
        <span className="book-item__title">{bookItem.title}</span>
        <div className="book-item__genre">
          <div className="book-item__genre-content">
            <BookGenre genre={bookItem.subtitle} key={bookItem.subtitle} />
          </div>
        </div>
        <div className="book-item__buy">
          <BookFavorite book={bookItem} />
          <BookBuy book={bookItem} />
        </div>
      </div>
    </div>
  );
};
