import { Dispatch, MouseEventHandler, SetStateAction } from 'react';
import { IBook } from '.';

export interface IBookProps {
  book: IBook;
}

export interface ICartMenuProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  setIsCartMenuVisible: Dispatch<SetStateAction<boolean>>;
}


export interface ICartItemProps {
  key: string;
  image: string;
  price: string;
  title: string;
  book: IBook;
}

export type IFavoriteItemProps = ICartItemProps;
