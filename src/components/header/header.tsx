import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import { CartBlock } from '../cart-block';
import { UserBlock } from '../user-block';
import { FavoriteBlock } from '../favorite-block';
import { Search } from '../../ui-kit/search';

export const Header = () => {
  const handleSearchClick = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key == 'Enter') {
      console.log('enter press here! ');
    }
  };
  return (
    <div className="header">
      <div className="wrapper">
        <Link to="/" className="header__store-title">
          Book's Store
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
