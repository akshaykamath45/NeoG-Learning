import { createContext } from "react";
import { useState } from "react";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const handleCartUpdate = (item) => {
    setCart((cart) => [...cart, item]);
  };
  return (
    <CartContext.Provider value={{ cart, handleCartUpdate }}>
      {children}
    </CartContext.Provider>
  );
};
