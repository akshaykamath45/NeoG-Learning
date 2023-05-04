import { products } from "../api/fakefetch";
import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";

export const Cart = () => {
  const { cart } = useContext(CartContext);

  // const deleteItem = (id) => {
  //   const updatedCart = cart.filter((item) => item.id !== id);
  //   setCart(updatedCart);
  // };

  const { handleCartItemDelete } = useContext(CartContext);

  return (
    <div>
      {cart.length === 0 && (
        <h2>Cart is empty,Please add some items to the cart :)</h2>
      )}
      <h2>Items : {cart.length}</h2>
      {cart.map(({ id, name, price, quantity }) => (
        <div
          style={{
            border: "1px solid black",
            padding: "2px",
            margin: "6px",
            borderRadius: "3px"
          }}
          key={id}
        >
          <b>{name}</b>
          <p>Price: {price}</p>
          <p>Quantity: {quantity}</p>
          <button onClick={() => handleCartItemDelete(id)}>
            Delete from Cart
          </button>
        </div>
      ))}
      <h3>
        Total Price :{" "}
        {cart.reduce((total, item) => total + item.price * item.quantity, 0)}
      </h3>
    </div>
  );
};
