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
