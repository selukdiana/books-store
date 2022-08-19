import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import './search.css';

export interface ISearchProps {
  handleClick: (event: React.KeyboardEvent<HTMLDivElement>) => void;
}

export const Search = ({ handleClick }: ISearchProps) => {
  return (
    <div className="search">
      <AiOutlineSearch className="search__icon" />
      <input
        placeholder="Search..."
        className="search__input"
        onKeyPress={handleClick}
      />
    </div>
  );
};
