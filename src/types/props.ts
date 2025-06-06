import type { Book } from "../store/slices/bookSlice";
import type { ITab } from ".";
import type { Dispatch, MouseEventHandler, SetStateAction } from "react";

export interface IBookProps {
  book: Book;
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
  book: Book;
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
  book: Book;
}

export interface IRatingProps {
  rating?: string;
}

export interface IStarIconProps {
  type: string;
}

export interface IBookProps {
  book: Book;
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
  books: Array<Book> | [];
}

export interface ITabsProps {
  className?: string;
  selectedId: string | number;
  tabs: ITab[];
  onClick: (id: string | number) => void;
}
