import {
  INewReleasesBooksState,
  ICartState,
  IFavoriteState,
  IBookState,
  ISearchState,
} from './types';
import { AnyAction, combineReducers } from 'redux';
import { IBook } from '../types';

const initialStateNewReleasesBooks: INewReleasesBooksState = {
  books: [],
  isFetching: false,
  isError: false,
};

//actions
//{type:'PUSH_BOOKS', booksArray:[]}

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

const initialStateSeacrhBooks = {
  books: [],
  total: '0',
  page: '1',
};

export const searchReducer = (
  state = initialStateSeacrhBooks,
  action: AnyAction
): ISearchState => {
  switch (action.type) {
    case 'PUSH_SEARCH_BOOKS':
      return Object.assign(
        { ...state },
        { books: action.booksArray, total: action.total, page: action.page }
      );
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  book: bookReducer,
  newReleases: newReleasesBooksReducer,
  cart: cartReducer,
  favorite: favoriteReducer,
  search: searchReducer,
});
