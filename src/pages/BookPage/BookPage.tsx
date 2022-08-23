import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AdditionalList } from '../../components/AdditionalList';
import { BookBuy } from '../../components/BookBuy';
import { BookCover } from '../../components/BookCover';
import { BookDescription } from '../../components/BookDescription';
import { BookFavorite } from '../../components/BookFavorite';
import { BookGenre } from '../../components/BookGenre';
import { Rating } from '../../components/Rating';
import { Subscribe } from '../../components/Subscribe';
import { getBookThunk } from '../../store/thunks/getBookThunk';
import { getSearchBooksThunk } from '../../store/thunks/getSearchBooksThunk';
import { IBookState, IRootState, ISearchState } from '../../store/types';
import { IBook } from '../../types';
import { Slider } from '../../ui-kit/Slider';
import './BookPage.css';

export const BookPage = () => {
  const dispatch = useDispatch<any>();
  const params = useParams<string>();
  const isbn13 = params.isbn13;
  const { currentBook, isFetching, isError } = useSelector<
    IRootState,
    IBookState
  >((state) => state.book);

  const books = useSelector<IRootState, Array<IBook>>(
    (state) => state.search.books
  );

  console.log(books);
  console.log('FFFFFFF  ', currentBook?.subtitle.replace(/ /g, '%20'));
  useEffect(() => {
    dispatch(getBookThunk(isbn13));
    dispatch(
      getSearchBooksThunk(currentBook?.subtitle.replace(/ /g, '%20'), '1')
    );
  }, [params]);


  return !isFetching ? (
    !isError ? (
      currentBook ? (
        <div className="book-page">
          <h1 className="book-page__title">{currentBook.title}</h1>
          <div className="book-page__content">
            <div className="book-page__left">
              <BookCover image={currentBook.image} size='25' />
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
          <Subscribe />
          <Slider books={ books} />
        </div>
      ) : null
    ) : (
      <>Request Error</>
    )
  ) : (
    <>Loading...</>
  );
};
