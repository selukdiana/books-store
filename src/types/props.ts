import { MouseEventHandler } from 'react';
import { IBook } from '.';

export interface IBookProps {
  image: string;
  title: string;
  genres: Array<string>;
  video: string;
  price: number;
  id: number;
  description: string;
}

export interface IBookBuyProps {
  book: IBookProps;
}

export interface ICartMenuProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface ICartItemProps {
  key: string;
  image: string;
  price: string;
  title: string;
  book: IBook;
}
