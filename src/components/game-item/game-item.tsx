import React from 'react';
import './game-item.css';
import {GameGenre} from '../game-genre'
import { IGameProps, IGameBuyProps } from '../../interfaces'
import { GameBuy } from '../game-buy';
import {GameCover} from '../game-cover';

export const GameItem = (game: IGameBuyProps) => {
  const gameItem = game.game;
  return (
    <div className="game-item">
      GameItem
      <div className="game-item__details">
        <GameCover image={gameItem.image} />
        <span className="game-item__title">{gameItem.title}</span>
        <div className="game-item__genre">
          {gameItem.genres.map((genre) => (
            <GameGenre genre={genre} key={genre} />
          ))}
        </div>
        <div className="game-item__buy">
          <GameBuy game={gameItem} />
        </div>
      </div>
    </div>
  );
};
