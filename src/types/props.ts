import { Dispatch, MouseEventHandler, SetStateAction } from 'react';
import { IBook, ITab } from '.';

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

export interface IAdditionalAttributeProps {
  name: string;
  value: string | undefined;
}

export interface IBookCoverProps {
  image: string;
  size?: string;
}

export interface IBookDescriptionProps {
  description: string | undefined;
}

export interface IButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type: string;
  children?: string;
  size?: string;
}

export interface IFavoriteMenuProps {
  setIsFavoriteMenuVisible: Dispatch<SetStateAction<boolean>>;
}

export interface IFavoriteButtonProps {
  onClickHandler?: MouseEventHandler<SVGElement>;
  type: string;
  size?: string;
}

export interface IOrderItemProps {
  book: IBook;
}

export interface IRatingProps {
  rating?: string;
}

export interface IStarIconProps {
  type: string;
}

export interface IBookProps {
  book: IBook;
}

export interface IModalProps {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
  children: any;
}

export interface ISearchProps {
  handleClick: (event: React.KeyboardEvent<HTMLDivElement>) => void;
}

export interface ISignInFormProps {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}

export interface ISignUpFormProps {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}

export interface ISignUpFormProps {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}

export interface ISliderProps {
  books: Array<IBook> | [];
}

export interface ITabsProps {
  className?: string;
  selectedId: string | number;
  tabs: ITab[];
  onClick: (id: string | number) => void;
}
