import { createContext } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // const handleAddToCart = (item) => {
  //   setCart([...cart, item]);
  // };
  const handleAddToCart = (item) => {
    const cartItem = { ...item, cartItemId: uuidv4() };
    setCart([...cart, cartItem]);
  };

  // const handleDeleteItemFromCart = (id) => {
  //   const updatedItems = cart.filter((item) => item.id !== id);
  //   setCart(updatedItems);
  // };
  const handleDeleteItemFromCart = (cartItemId) => {
    const updatedItems = cart.filter((item) => item.cartItemId !== cartItemId);
    setCart(updatedItems);
  };

  return (
    <CartContext.Provider
      value={{ cart, handleAddToCart, handleDeleteItemFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
