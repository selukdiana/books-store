import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { BookItem } from '../../components/BookItem';
import { getSearchBooksThunk } from '../../store/thunks/getSearchBooksThunk';
import { IRootState, ISearchState } from '../../store/types';
import { IBook } from '../../types';
import { createPages } from '../../utils/pagesCreator';
import './SearchPage.css';

export const SearchPage = () => {
  const dispatch = useDispatch<any>();
  const params = useParams<string>();
  const navigate = useNavigate();

  const query = params.query;

  const { books, page, total, isFetching, isError } = useSelector<
    IRootState,
    ISearchState
  >((state) => state.search);

  useEffect(() => {
    dispatch(getSearchBooksThunk(query, '1'));
  }, [query]);

  const pages = new Array<number>();
  const pagesCount = Math.ceil(Number(total) / 10);
  createPages(pages, pagesCount, Number(page));

  return !isFetching ? (
    !isError || books.length!=0 ? (
      books ? (
        <div className="search-page">
          <div className="books-list">
            {books.map((book: IBook) => (
              <BookItem book={book} key={book.isbn13} />
            ))}
          </div>

          <div className="pages">
            {pages.map((pageItem, index) => (
              <span
                className={
                  pageItem == Number(page) ? 'page current-page' : 'page'
                }
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
      ) : (<>{books}</>)
    ) : (
      <>Request Error</>
    )
  ) : (
    <>Loading...</>
  );
};
