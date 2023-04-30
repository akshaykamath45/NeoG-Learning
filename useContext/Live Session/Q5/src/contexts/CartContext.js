import { createContext } from "react";

export const CartContext = createContext();
export const CartProvider = ({ children }) => {
  return (
    <CartContext.Provider
      value={{ items: 8, cartLogger: () => console.log("item clicked") }}
    >
      {children}
    </CartContext.Provider>
  );
};
