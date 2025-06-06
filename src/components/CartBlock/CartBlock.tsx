import { useState, useCallback } from "react";
import "./CartBlock.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CartMenu } from "./CartMenu";
import { calcTotalPrice } from "../../utils/calcTotalPrice";
import { ItemsInCart } from "./ItemsInCart";
import { useNavigate } from "react-router";
import { useAppSelector } from "../../store/hooks";

export const CartBlock = () => {
  const items = useAppSelector((state) => state.cart.books);

  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);

  const navigate = useNavigate();

  const totalPrice = calcTotalPrice(items);

  const handleGoToOrderClick = useCallback(() => {
    setIsCartMenuVisible(false);
    navigate("/order");
  }, [navigate]);

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
      {isCartMenuVisible && (
        <CartMenu
          onClick={handleGoToOrderClick}
          setIsCartMenuVisible={setIsCartMenuVisible}
        />
      )}
    </div>
  );
};
