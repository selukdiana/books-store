import React from 'react';
import './book-item.css';
import { BookGenre } from '../book-genre';
import { IBookProps } from '../../types';
import { BookBuy } from '../book-buy';
import { BookCover } from '../book-cover';
import { useDispatch, useSelector } from 'react-redux';
import { BookFavorite } from '../book-favorite';
import { setCurrentBook } from '../../store/actions';
import { IRootState } from '../../store/types';
import { useNavigate } from 'react-router-dom';

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
