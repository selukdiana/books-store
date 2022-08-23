import { AnyAction } from "redux";
import { INewReleasesBooksState } from "../types";

const initialStateNewReleasesBooks: INewReleasesBooksState = {
  books: [],
  isFetching: false,
  isError: false,
};

export const newReleasesBooksReducer = (
  state = initialStateNewReleasesBooks,
  action: AnyAction
): INewReleasesBooksState => {
  switch (action.type) {
    case 'RECIEVE_DATA_NEW_RELEASES_BOOKS':
      return Object.assign(
        { ...state },
        { books: action.booksArray, isFetching: false }
      );
    case 'REQUEST_DATA_NEW_RELEASES_BOOKS':
      return Object.assign({ ...state }, { isFetching: true });
    case 'RECIEVE_ERROR_NEW_RELEASES_BOOKS':
      return Object.assign({ ...state }, { isError: true, isFetching: false });
    default:
      return state;
  }
};
