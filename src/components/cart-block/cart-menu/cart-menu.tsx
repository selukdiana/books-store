import React from 'react';
import { useSelector } from 'react-redux';
import { IRootState } from '../../../store/types';
import { ICartMenuProps } from '../../../types/props';
import { calcTotalPrice } from '../../../utils';
import { Button } from '../../button';
import { CartItem } from './cart-item';
// import { CartItem } from '../cart-item';
// import { calcTotalPrice } from '../utils';
import './cart-menu.css';

export const CartMenu = ({ onClick }: ICartMenuProps) => {
  const items = useSelector((state: IRootState) => state.cart.books);
  return (
    <div className="cart-menu">
      <div className="cart-menu__books-list">
        {items.length > 0
          ? items.map((book) => (
              <CartItem
                key={book.image}
                image={book.image}
                price={book.price}
                title={book.title}
                book={book}
              />
            ))
          : 'Корзина пуста'}
      </div>
      {items.length > 0 ? (
        <div className="cart-menu__arrange">
          <div className="cart-menu__total-price">
            <span>Итого:</span>
            <span>{`\$${calcTotalPrice(items)}`}</span>
          </div>
          <Button type="primary" size="m" onClick={onClick}>
            Оформить заказ
          </Button>
        </div>
      ) : null}
    </div>
  );
};
