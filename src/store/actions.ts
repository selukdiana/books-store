import exp from 'constants';
import { IBook } from '../types';

export const recieveDataNewReleasesBooks = (booksArray: Array<IBook> | []) => {
  return { type: 'RECIEVE_DATA_NEW_RELEASES_BOOKS', booksArray };
};

export const requestDataNewReleasesBooks = () => {
  return { type: 'REQUEST_DATA_NEW_RELEASES_BOOKS' };
};

export const recieveErrorNewReleasesBooks = () => {
  return { type: 'RECIEVE_ERROR_NEW_RELEASES_BOOKS' };
};

export const pushSearchBooks = (
  booksArray: Array<IBook> | [],
  total: string,
  page: string
) => {
  return { type: 'PUSH_SEARCH_BOOKS', booksArray, total, page };
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

export const recieveDataBook = (book: IBook) => {
  return { type: 'RECIEVE_DATA_BOOK', book };
};
export const recieveErrorBook = () => {
  return { type: 'RECIEVE_ERROR_BOOK'};
};
export const requestDataBook = () => {
  return { type: 'REQUEST_DATA_BOOK'};
};

export const clearFavorite = () => {
  return { type: 'CLEAR_FAVORITE' };
};

export const clearCart = () => {
  return { type: 'CLEAR_CART' };
};
