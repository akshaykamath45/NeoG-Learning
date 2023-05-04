import { useContext } from "react";
import { CartContext } from "../index";
export const Header = () => {
  const { cart } = useContext(CartContext);
  return (
    <div>
      <h1>meKart</h1>
      <h3> items in cart: {cart.length} </h3>
    </div>
  );
};
