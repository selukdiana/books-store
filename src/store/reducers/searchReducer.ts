import { AnyAction } from "redux";
import { ISearchState } from "../types";

const initialStateSeacrhBooks: ISearchState = {
  books: [],
  total: '0',
  page: '1',
  isFetching: false,
  isError: false,
};

export const searchReducer = (
  state = initialStateSeacrhBooks,
  action: AnyAction
): ISearchState => {
  switch (action.type) {
    case 'RECIEVE_DATA_SEARCH_BOOKS':
      return Object.assign(
        { ...state },
        {
          books: action.booksArray,
          total: action.total,
          page: action.page,
          isFetching: false,
          isError: false,
        }
      );
    case 'RECIEVE_ERROR_SEARCH_BOOKS':
      return Object.assign({ ...state }, { isFetching: false, isError: true });
    case 'REQUEST_DATA_SEARCH_BOOKS':
      return Object.assign({ ...state }, { isFetching: true, isError: false });
    default:
      return state;
  }
};
