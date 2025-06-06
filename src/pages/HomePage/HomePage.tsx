import { useState, useEffect } from "react";
import "./HomePage.css";
import { BookItem } from "../../components/BookItem";
import { Subscribe } from "../../components/Subscribe";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getNewReleasesBooks } from "../../store/slices/newReleasesBooksSlice";

export const HomePage = () => {
  const dispatch = useAppDispatch();

  const { books, isFetching, isError } = useAppSelector(
    (state) => state.newReleasesBooks
  );

  useEffect(() => {
    dispatch(getNewReleasesBooks());
  }, [dispatch]);

  return !isFetching ? (
    !isError ? (
      <div className="home-page">
        <h2>New Releases Books</h2>
        <div className="books-list">
          {books.length &&
            books.map((book) => <BookItem book={book} key={book.isbn13} />)}
        </div>
        <Subscribe />
      </div>
    ) : (
      <>Request Error</>
    )
  ) : (
    <>Loading...</>
  );
};
