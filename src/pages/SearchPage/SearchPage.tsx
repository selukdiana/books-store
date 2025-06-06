import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { BookItem } from "../../components/BookItem";
import { createPages } from "../../utils/pagesCreator";
import "./SearchPage.css";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getSearchBooks } from "../../store/slices/searchSlice";

export const SearchPage = () => {
  const dispatch = useAppDispatch();
  const params = useParams<string>();
  const navigate = useNavigate();

  const query = params.query;

  const { books, page, total, isFetching, isError } = useAppSelector(
    (state) => state.search
  );

  useEffect(() => {
    dispatch(getSearchBooks({ query: query, page: "1" }));
  }, [query, dispatch]);

  const pages = new Array<number>();
  const pagesCount = Math.ceil(Number(total) / 10);
  createPages(pages, pagesCount, Number(page));

  return !isFetching ? (
    !isError || books.length !== 0 ? (
      books ? (
        <div className="search-page">
          <div className="books-list">
            {books.map((book) => (
              <BookItem book={book} key={book.isbn13} />
            ))}
          </div>

          <div className="pages">
            {pages.map((pageItem, index) => (
              <span
                className={
                  pageItem == Number(page) ? "page current-page" : "page"
                }
                key={index}
                onClick={() => {
                  navigate(`/${query}/${pageItem}`);
                  dispatch(
                    getSearchBooks({ query: query, page: String(pageItem) })
                  );
                }}
              >
                {pageItem}
              </span>
            ))}
          </div>
        </div>
      ) : (
        <>{books}</>
      )
    ) : (
      <>Request Error</>
    )
  ) : (
    <>Loading...</>
  );
};
