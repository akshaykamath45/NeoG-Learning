import { CartContext } from "..";
import { useContext } from "react";
export const Header = () => {
  const { cart } = useContext(CartContext);
  return (
    <div>
      <h1>meKart</h1>
      <h2> items in cart: {cart.length} </h2>
    </div>
  );
};
