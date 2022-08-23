import { AnyAction } from "redux";
import { IBookState } from "../types";

const initialStateBook: IBookState = {
  currentBook: null,
  isError: false,
  isFetching: false,
};

export const bookReducer = (
  state = initialStateBook,
  action: AnyAction
): IBookState => {
  switch (action.type) {
    case 'RECIEVE_DATA_BOOK':
      return Object.assign(
        { ...state },
        { currentBook: action.book, isFetching: false }
      );
    case 'REQUEST_DATA_BOOK':
      return Object.assign({ ...state }, { isFetching: true });
    case 'RECIEVE_ERROR_BOOK':
      return Object.assign({ ...state }, { isError: true, isFetching: false });
    default:
      return state;
  }
};
