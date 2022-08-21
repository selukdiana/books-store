import { IBook } from '../types';

export interface INewReleasesBooksState {
  books: Array<IBook> | [];
  isFetching: boolean;
  isError: boolean;
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
  newReleases: INewReleasesBooksState;
  favorite: IFavoriteState;
  book: IBookState;
  search: ISearchState;
}

export interface IBookState {
  currentBook: IBook | null;
}
