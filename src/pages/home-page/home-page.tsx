import React, { useState, useEffect } from 'react';
import './home-page.css';
import { BookItem } from '../../components/book-item';
import { useDispatch, useSelector } from 'react-redux';
import { recieveDataNewReleasesBooks } from '../../store/actions';
import { IRootState, INewReleasesBooksState } from '../../store/types';
import { IBook } from '../../types';
import { getNewReleasesBooksThunk } from '../../store/thunks/getNewReleasesBooksThunk';

export const HomePage = () => {
  const dispatch = useDispatch<any>();

  const books = useSelector<IRootState, Array<IBook>>(
    (state) => state.newReleases.books
  );

  const isFetching = useSelector<IRootState, boolean>(
    (state) => state.newReleases.isFetching
  );

  const isError = useSelector<IRootState, boolean>(
    (state) => state.newReleases.isError
  );

  useEffect(() => {
    dispatch(getNewReleasesBooksThunk());
  }, []);
  return !isFetching ? (
    !isError ? (
      <div className="home-page">
        <h2>New Releases Books</h2>
        <div className="books-list">
          {books.map((book: IBook) => (
            <BookItem book={book} key={book.isbn13} />
          ))}
        </div>
      </div>
    ) : (
      <>Request Error</>
    )
  ) : (
    <>Loading...</>
  );
};
