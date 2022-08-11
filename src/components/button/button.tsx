import React, { MouseEventHandler } from 'react';
import classNames from 'classnames';
import './button.css';

interface IButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type: string;
  children: Array<string>;
  size?: string;
}

export const Button = ({
  onClick,
  type,
  children,
  size = 's',
}: IButtonProps) => {
  const btnClass = classNames({
    btn: true,
    'btn--secondary': type === 'secondary',
    'btn--primary': type === 'primary',
    'btn--small': size === 's',
    'btn--medium': size === 'm',
  });

  return (
    <button className={btnClass} onClick={onClick}>
      {children}
    </button>
  );
};
