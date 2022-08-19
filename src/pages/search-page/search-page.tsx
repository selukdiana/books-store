import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { BookItem } from '../../components/book-item';
import { getSearchBooksThunk } from '../../store/thunks/getSearchBooksThunk';
import { IRootState, ISearchState } from '../../store/types';
import { IBook } from '../../types';
import { createPages } from '../../utils/pagesCreator';
import './search-page.css';

export const SearchPage = () => {
  const dispatch = useDispatch<any>();
  const { books, page, total } = useSelector<IRootState, ISearchState>(
    (state) => state.search
  );
  const params = useParams<string>();
  const query = params.query;
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getSearchBooksThunk(query, '1'));
  }, [query]);

  const pages = new Array<number>();
  const pagesCount = Math.ceil(Number(total) / 10);
  createPages(pages, pagesCount, Number(page));

  return books ? (
    <div className="search-page">
      <div className="books-list">
        {books.map((book: IBook) => (
        <BookItem book={book} key={book.isbn13} />
      ))}
      </div>
      
      <div className="pages">
        {pages.map((pageItem, index) => (
          <span
            className={pageItem == Number(page) ? 'page current-page' : 'page'}
            key={index}
            onClick={() => {
              navigate(`/${query}/${pageItem}`);
              dispatch(getSearchBooksThunk(query, String(pageItem)));
            }}
          >
            {pageItem}
          </span>
        ))}
      </div>
    </div>
  ) : null;
};
function pagesCreator() {
  throw new Error('Function not implemented.');
}
