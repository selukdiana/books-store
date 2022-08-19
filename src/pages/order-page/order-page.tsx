import React from 'react';
import { useSelector } from 'react-redux';
import { OrderItem } from '../../components/order-item';
import { IRootState } from '../../store/types';
import { IBook } from '../../types';
import { calcTotalPrice } from '../../utils/calcTotalPrice';
import './order-page.css';

export const OrderPage = () => {
  const items = useSelector<IRootState, Array<IBook>>(
    (state) => state.cart.books
  );


  return items.length ? (
    <div className="order-page">
      <div className="order-page__list">
        {items.map((book) => (
          <OrderItem book={book} />
        ))}
      </div>
      <div className="order__arrange">
        <div className="order__total-price">
          <span>Total to pay:</span>
          <span>{`\$${calcTotalPrice(items)}`}</span>
        </div>
      </div>
    </div>
  ) : (
    <h2>Your cart is empty</h2>
  );
};
