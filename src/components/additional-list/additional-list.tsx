import React from 'react';
import { Link } from 'react-router-dom';
import { IBook } from '../../types';
import { IBookProps } from '../../types/props';
import { AdditionalAttribute } from './additional-attribute';
import './additional-list.css';

export const AdditionalList = (book: IBookProps) => {
  const bookItem = book.book;
  const urls = Object.keys(bookItem.pdf);
  return (
    <ul className="additional-list">
      <AdditionalAttribute name="Title" value={bookItem.title} />
      <AdditionalAttribute name="Authors" value={bookItem.authors} />
      <AdditionalAttribute name="Publisher" value={bookItem.publisher} />
      <AdditionalAttribute name="Pages" value={bookItem.pages} />
      <AdditionalAttribute name="Year" value={bookItem.year} />
      <div className="book-page__preview">
        {bookItem.pdf ? (
          <a href={`${bookItem.pdf[urls[0]]}`} className="secondary-text">
            Preview Book
          </a>
        ) : (
          <></>
        )}
      </div>
    </ul>
  );
};
