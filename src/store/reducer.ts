import { IState, ICartState, IFavoriteState } from './types';
import { AnyAction, combineReducers } from 'redux';
import { IBook } from '../types';

const initialState: IState = {
  books: [],
};

//actions
//{type:'PUSH_BOOKS', booksArray:[]}

export const newReleasesBooksReducer = (
  state = initialState,
  action: AnyAction
): IState => {
  switch (action.type) {
    case 'PUSH_BOOKS':
      return Object.assign({ ...state }, { books: action.booksArray });
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
    default:
      return state;
  }
};

const initialStateFavorite: ICartState = {
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
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  newReleases: newReleasesBooksReducer,
  cart: cartReducer,
  favorite: favoriteReducer,
});
