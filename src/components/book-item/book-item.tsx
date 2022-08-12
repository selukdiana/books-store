import React from 'react';
import './book-item.css';
import { BookGenre } from '../book-genre';
import { IBookBuyProps } from '../../types';
import { BookBuy } from '../book-buy';
import { BookCover } from '../book-cover';

export const BookItem = (book: IBookBuyProps) => {
  const bookItem = book.book;
  return (
    <div className="book-item">
      <div className="book-item__details">
        <BookCover image={bookItem.image} />
        <span className="book-item__title">{bookItem.title}</span>
        <div className="book-item__genre">
          <BookGenre genre={bookItem.subtitle} key={bookItem.subtitle} />
        </div>
        <div className="book-item__buy">
          <BookBuy book={bookItem} />
        </div>
      </div>
    </div>
  );
};
