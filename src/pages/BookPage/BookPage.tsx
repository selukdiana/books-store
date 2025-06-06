import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AdditionalList } from "../../components/AdditionalList";
import { BookBuy } from "../../components/BookBuy";
import { BookCover } from "../../components/BookCover";
import { BookDescription } from "../../components/BookDescription";
import { BookFavorite } from "../../components/BookFavorite";
import { BookGenre } from "../../components/BookGenre";
import { Rating } from "../../components/Rating";
import { Subscribe } from "../../components/Subscribe";
import { Slider } from "../../ui-kit/Slider";
import "./BookPage.css";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getBook } from "../../store/slices/bookSlice";
import { getSearchBooks } from "../../store/slices/searchSlice";

export const BookPage = () => {
  const dispatch = useAppDispatch();
  const params = useParams<string>();
  const isbn13 = params.isbn13;
  const { currentBook, isFetching, isError } = useAppSelector(
    (state) => state.book
  );

  const books = useAppSelector((state) => state.search.books);

  useEffect(() => {
    dispatch(getBook(isbn13));
  }, [params, dispatch, isbn13]);

  useEffect(() => {
    dispatch(
      getSearchBooks({
        query: currentBook?.subtitle.replace(/ /g, "%20"),
        page: "1",
      })
    );
  }, [currentBook?.subtitle, dispatch]);

  return !isFetching ? (
    !isError ? (
      currentBook ? (
        <div className="book-page">
          <h1 className="book-page__title">{currentBook.title}</h1>
          <div className="book-page__content">
            <div className="book-page__left">
              <BookCover image={currentBook.image} size="25" />
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
          <Slider books={books} />
        </div>
      ) : null
    ) : (
      <>Request Error</>
    )
  ) : (
    <>Loading...</>
  );
};
