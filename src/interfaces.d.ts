export interface IGameProps {
  image: string;
  title: string;
  genres: Array<string>;
  video: string;
  price: number;
  id: number;
  description: string;
}

export interface IGameBuyProps {
  game: IGameProps;
}
