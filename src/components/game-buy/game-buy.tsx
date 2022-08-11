import React from 'react';
import './game-buy.css';
import { IGameProps, IGameBuyProps } from '../../interfaces';
import {Button} from '../button'


export const GameBuy = (game: IGameBuyProps) => {
  const isItemInCart = true;
  return (
    <div className="game-buy">
      <span className="game-buy__price">{game.game.price} руб.</span>
      <Button
        type={isItemInCart ? 'secondary' : 'primary'}
        // onClick={handleClick}
      >
        {/* {isItemInCart ? 'Убрать из корзины' : 'В Корзину'} */}
      </Button>
    </div>
  );
};
