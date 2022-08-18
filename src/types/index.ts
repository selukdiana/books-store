export interface IBook {
  title: string;
  subtitle: string;
  isbn13: string;
  price: string;
  image: string;
  url: string;
}

export interface IBookProps {
  book: IBook;
}

export interface IPdfList {
  [extraProps: string]: string;
}

export interface IBook {
  image: string;
  isbn13: string;
  price: string;
  title: string;
  url: string;
  subtitle: string;
  authors?: string;
  publisher?: string;
  isbn10?: string;
  pages?: string;
  year?: string;
  rating?: string;
  desc?: string;
  pdf?: IPdfList;
}
