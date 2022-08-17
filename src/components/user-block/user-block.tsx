import React from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import './user-block.css'

export const UserBlock = () => {
   return (
     <div className="user-block">
       <BsFillPersonFill
         color="white"
         size={25}
         className="cart-icon"
         onClick={() => {}}
       />
     </div>
   );
};

