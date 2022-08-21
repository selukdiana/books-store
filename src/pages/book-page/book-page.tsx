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
import { IBookState, IRootState } from '../../store/types';
import { IBook } from '../../types';
import './book-page.css';

export const BookPage = () => {
  const dispatch = useDispatch<any>();
  const params = useParams<string>();
  const isbn13 = params.isbn13;
  const { currentBook, isFetching, isError } = useSelector<
    IRootState,
    IBookState
  >((state) => state.book);

  useEffect(() => {
    dispatch(getBookThunk(isbn13));
  }, []);

  return !isFetching ? (
    !isError ? (
      currentBook ? (
        <div className="book-page">
          <h1 className="book-page__title">{currentBook.title}</h1>
          <div className="book-page__content">
            <div className="book-page__left">
              <BookCover image={currentBook.image} />
              <BookGenre
                genre={currentBook.subtitle}
                key={currentBook.subtitle}
              />
              <Rating rating={currentBook.rating} />
              <div className="book-page__buy-book">
                <BookFavorite book={currentBook} />
                <BookBuy book={currentBook} />
              </div>
            </div>
            <div className="book-page__right">
              <AdditionalList book={currentBook} />
            </div>
          </div>
          <BookDescription description={currentBook.desc} />
        </div>
      ) : null
    ) : (
      <>Request Error</>
    )
  ) : (
    <>Loading...</>
  );
};
