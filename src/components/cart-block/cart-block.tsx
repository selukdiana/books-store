import React, { useState, useCallback, useRef, useEffect } from 'react';
import './cart-block.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { IState, IRootState } from '../../store/types';
import { IBook } from '../../types';
import { CartMenu } from './cart-menu';
import { calcTotalPrice } from '../../utils';
import { ItemsInCart } from './items-in-cart';
import { useNavigate } from 'react-router-dom';

export const CartBlock = () => {
  const items: Array<IBook> = useSelector<IRootState, Array<IBook>>(
    (state) => state.cart.books
  );

  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);

  const navigate = useNavigate();

  const totalPrice = calcTotalPrice(items);

  const handleGoToOrderClick = useCallback(() => {
    setIsCartMenuVisible(false);
    navigate('/order');
  }, [navigate]);

  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const checkIfClickedOutside = (e: Event | undefined): any => {
      if (
        isCartMenuVisible &&
        ref.current &&
        !ref.current.contains(e?.target as HTMLElement)
      ) {
        setIsCartMenuVisible(false);
      }
    };

    document.addEventListener('click', checkIfClickedOutside);

    return () => {
      document.removeEventListener('click', checkIfClickedOutside);
    };
  }, [isCartMenuVisible]);

  return (
    <div className="cart-block" ref={ref}>
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
      {/* {isCartMenuVisible && <CartMenu />} */}
      {isCartMenuVisible && <CartMenu onClick={handleGoToOrderClick} />}
    </div>
  );
};
