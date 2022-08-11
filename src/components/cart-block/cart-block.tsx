import React from 'react';
import './cart-block.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';

export const CartBlock = () => {
  return (
    <div className="cart-block">
      <AiOutlineShoppingCart color="white" size={25} className="cart-icon" />
      <span className="total-price">1000 руб.</span>
      {/* {totalPrice > 0 ? (
        <span className="total-price">{totalPrice} руб.</span>
      ) : null}
      {isCartMenuVisible && <CartMenu onClick={handleGoToOrderClick} />} */}
    </div>
  );
};
