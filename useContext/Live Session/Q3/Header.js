import { CartContext } from "..";
import { useContext } from "react";
export const Header = () => {
  const { items } = useContext(CartContext);
  return (
    <div>
      <h1>meKart</h1>
      <h2> items in cart: {items} </h2>
    </div>
  );
};
