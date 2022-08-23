import { AnyAction } from "redux";
import { IBook } from "../../types";
import { IFavoriteState } from "../types";

const initialStateFavorite: IFavoriteState = {
  books: [],
  count: 0,
};

export const favoriteReducer = (
  state = initialStateFavorite,
  action: AnyAction
): IFavoriteState => {
  const booksArray: Array<IBook> = [...state.books];
  switch (action.type) {
    case 'SET_ITEM_IN_FAVORITE':
      booksArray.push(action.book);
      return Object.assign(
        { ...state },
        { books: booksArray, count: state.count + 1 }
      );
    case 'GET_ITEM_FROM_FAVORITE':
      return Object.assign(
        { ...state },
        {
          books: booksArray.filter(
            (book: IBook) => book.isbn13 != action.book.isbn13
          ),
          count: state.count - 1,
        }
      );
    case 'CLEAR_FAVORITE':
      return {
        books: [],
        count: 0,
      };
    default:
      return state;
  }
};
