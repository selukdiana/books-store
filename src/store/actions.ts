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
