import exp from 'constants';
import { IBook } from '../types';

export const pushBooks = (booksArray: Array<IBook> | []) => {
  return { type: 'PUSH_BOOKS', booksArray };
};

export const setItemInCart = (book: IBook) => {
  return { type: 'SET_ITEM_IN_CART', book };
};

export const getItemFromCart = (book: IBook) => {
  return { type: 'GET_ITEM_FROM_CART', book };
};

export const setItemInFavorite = (book: IBook) => {
  return { type: 'SET_ITEM_IN_FAVORITE', book };
};

export const getItemFromFavorite = (book: IBook) => {
  return { type: 'GET_ITEM_FROM_FAVORITE', book };
};

export const setCurrentBook = (book: IBook) => {
  return { type: 'SET_CURRENT_BOOK', book };
};

export const clearFavorite = () => {
  return { type: 'CLEAR_FAVORITE'}
}

export const clearCart = () => {
  return { type: 'CLEAR_CART' };
};