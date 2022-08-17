import React, { useState, useCallback } from 'react';
import './cart-block.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { IState, IRootState } from '../../store/types';
import { IBook } from '../../types';
import { CartMenu } from './cart-menu';
import { calcTotalPrice } from '../../utils';
import { useHistory } from 'react-router-dom';
import { ItemsInCart } from './items-in-cart';

export const CartBlock = () => {
  const items: Array<IBook> = useSelector<IRootState, Array<IBook>>(
    (state) => state.cart.books
  );

  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);

  const history = useHistory();

  const totalPrice = calcTotalPrice(items);

  const handleGoToOrderClick = useCallback(() => {
    setIsCartMenuVisible(false);
    history.push('/order');
  }, [history]);

  return (
    <div className="cart-block">
      <ItemsInCart quantity={items.length} />
      <AiOutlineShoppingCart
        color="white"
        size={25}
        className="cart-icon"
        onClick={() => {
          setIsCartMenuVisible(!isCartMenuVisible);
        }}
      />
      {totalPrice > 0 ? (
        <span className="total-price">{`\$${totalPrice}`}</span>
      ) : (
        <span className="total-price">{`$00.00`}</span>
      )}
      {isCartMenuVisible && <CartMenu />}
      {/* {isCartMenuVisible && <CartMenu onClick={handleGoToOrderClick} />} должнобыть */}
    </div>
  );
};
