import { AnyAction } from "redux";
import { IBook } from "../../types";
import { ICartState } from "../types";

const initialStateCart: ICartState = {
  books: [],
  count: 0,
};

export const cartReducer = (
  state = initialStateCart,
  action: AnyAction
): ICartState => {
  const booksArray: Array<IBook> = [...state.books];
  switch (action.type) {
    case 'SET_ITEM_IN_CART':
      booksArray.push(action.book);
      return Object.assign(
        { ...state },
        { books: booksArray, count: state.count + 1 }
      );
    case 'GET_ITEM_FROM_CART':
      return Object.assign(
        { ...state },
        {
          books: booksArray.filter(
            (book: IBook) => book.isbn13 != action.book.isbn13
          ),
          count: state.count - 1,
        }
      );
    case 'CLEAR_CART':
      return {
        books: [],
        count: 0,
      };
    default:
      return state;
  }
};
