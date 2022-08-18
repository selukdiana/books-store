import React from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import './user-block.css';

export const UserBlock = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/auth')
  };

  return (
    <div className="user-block" onClick={handleClick}>
      <BsFillPersonFill
        color="white"
        size={25}
        className="cart-icon"
        onClick={() => {}}
      />
    </div>
  );
};
