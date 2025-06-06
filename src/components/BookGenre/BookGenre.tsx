import "./BookGenre.css";

export const BookGenre = ({ genre = "" }) => {
  return genre ? <div className="book-genre">{genre}</div> : <span></span>;
};
