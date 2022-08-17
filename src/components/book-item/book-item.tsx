import React from 'react';
import './book-item.css';
import { BookGenre } from '../book-genre';
import { IBookBuyProps } from '../../types';
import { BookBuy } from '../book-buy';
import { BookCover } from '../book-cover';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { BookFavorite } from '../book-favorite';

export const BookItem = (book: IBookBuyProps) => {
  const bookItem = book.book;
  const history = useHistory();
  const dispatch = useDispatch();
  const handleClick = () => {
    // dispatch(setCurrentBook(book));
    history.push(`/app/${book.book.title}`);
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
