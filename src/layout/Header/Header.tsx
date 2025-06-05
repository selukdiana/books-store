import React from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router";
import { CartBlock } from "../../components/CartBlock";
import { UserBlock } from "../../components/UserBlock";
import { FavoriteBlock } from "../../components/FavoriteBlock";
import { Search } from "../../ui-kit/Search";
import { BsBook } from "react-icons/bs";

export const Header = () => {
  const navigate = useNavigate();

  const handleSearchClick = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key == "Enter") {
      const query = (event.currentTarget as HTMLInputElement).value;
      navigate(`/${query}/1`);
    }
  };

  return (
    <div className="header">
      <div className="wrapper">
        <Link to="/" className="header__store-title">
          BOOKSTORE
        </Link>
        <Link to="/" className="header__store-title__icon header__store-title ">
          <BsBook />
        </Link>
      </div>
      <div className="wrapper header__cart-btn-wrapper">
        <Search handleClick={handleSearchClick} />
        <FavoriteBlock />
        <CartBlock />
        <UserBlock />
      </div>
    </div>
  );
};
