import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AdditionalList } from '../../components/additional-list';
import { BookBuy } from '../../components/book-buy';
import { BookCover } from '../../components/book-cover';
import { BookDescription } from '../../components/book-description';
import { BookFavorite } from '../../components/book-favorite';
import { BookGenre } from '../../components/book-genre';
import { Rating } from '../../components/rating';
import { getBookThunk } from '../../store/thunks/getBookThunk';
import { IRootState } from '../../store/types';
import { IBook } from '../../types';
import './book-page.css';

export const BookPage = () => {
  const dispatch = useDispatch<any>();
  const params = useParams<string>();
  const isbn13 = params.isbn13;
  console.log(isbn13);
  const book = useSelector<IRootState, IBook | null>(
    (state) => state.book.currentBook
  );

  useEffect(() => {
    dispatch(getBookThunk(isbn13));
  }, []);

  console.log(book);


  return !book ? null : (
    <div className="book-page">
      <h1 className="book-page__title">{book.title}</h1>
      <div className="book-page__content">
        <div className="book-page__left">
          <BookCover image={book.image} />
          <BookGenre genre={book.subtitle} key={book.subtitle} />
          <Rating rating={book.rating} />
          <div className="book-page__buy-book">
            <BookFavorite book={book} />
            <BookBuy book={book} />
          </div>
        </div>
        <div className="book-page__right">
          <AdditionalList book={book} />
        </div>
      </div>
      <BookDescription description={ book.desc} />
    </div>
  );
};
