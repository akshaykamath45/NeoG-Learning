import { createContext } from "react";
import { useState } from "react";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const handleCartUpdate = (item) => {
    setCart([...cart, item]);
  };

  const handleCartItemDelete = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  return (
    <CartContext.Provider
      value={{ cart, handleCartUpdate, handleCartItemDelete }}
    >
      {children}
    </CartContext.Provider>
  );
};
