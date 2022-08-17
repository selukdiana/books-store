import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import {CartBlock} from '../cart-block'
import { UserBlock } from '../user-block';
import { FavoriteBlock } from '../favorite-block';

export const Header = () => {
  return (
    <div className="header">
      <div className="wrapper">
        <Link to="/" className="header__store-title">
          Book's Store
        </Link>
      </div>
      <div className="wrapper header__cart-btn-wrapper">
        <FavoriteBlock/>
        <CartBlock />
        <UserBlock/>
      </div>
    </div>
  );
};
