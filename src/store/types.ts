import { IBook } from '../types';

export interface IState {
  books: Array<IBook> | [];
}

export interface ICartState {
  books: Array<IBook> | [];
  count: number;
}

export type IFavoriteState = ICartState;

export interface ISearchState {
  books: Array<IBook> | [];
  total: string;
  page: string;
}

export interface IRootState {
  cart: ICartState;
  newReleases: IState;
  favorite: IFavoriteState;
  book: IBookState;
  search: ISearchState;
}

export interface IBookState {
  currentBook: IBook | null;
}
