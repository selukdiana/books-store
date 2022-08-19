import React, { Dispatch, SetStateAction } from 'react';
import './modal.css';

export interface IModalProps {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
  children: any
}

export const Modal = ({ active, setActive, children }: IModalProps) => {
  return (
    <div
      className={active ? 'modal active' : 'modal'}
      onClick={() => {
        setActive(false);
      }}
    >
      <div
        className={active ? 'modal__content active' : 'modal__content'}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  );
};
