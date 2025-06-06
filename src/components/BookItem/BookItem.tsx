import { BookGenre } from "../BookGenre";
import { BookBuy } from "../BookBuy";
import { BookCover } from "../BookCover";
import { BookFavorite } from "../BookFavorite";
import "./BookItem.css";
import { type IBookProps } from "../../types/props";
import { useNavigate } from "react-router";

export const BookItem = ({ book }: IBookProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/app/${book.isbn13}`);
  };

  return (
    <div className="book-item" onClick={handleClick}>
      <div className="book-item__details">
        <BookCover image={book.image} />
        <span className="book-item__title">{book.title}</span>
        <div className="book-item__genre">
          <div className="book-item__genre-content">
            <BookGenre genre={book.subtitle} key={book.subtitle} />
          </div>
        </div>
        <div className="book-item__buy">
          <BookFavorite book={book} />
          <BookBuy book={book} />
        </div>
      </div>
    </div>
  );
};
