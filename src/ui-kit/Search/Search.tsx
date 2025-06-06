import { AiOutlineSearch } from "react-icons/ai";
import type { ISearchProps } from "../../types/props";
import "./Search.css";

export const Search = ({ handleClick }: ISearchProps) => {
  return (
    <div className="search">
      <AiOutlineSearch className="search__icon" />
      <input
        placeholder="Search..."
        className="search__input"
        onKeyDown={handleClick}
      />
    </div>
  );
};
