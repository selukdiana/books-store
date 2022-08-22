export interface IBookProps {
  book: IBook;
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
  pdf?: any
}
