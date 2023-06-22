import { useContext } from "react";
import { products } from "../api/fakefetch";
import { CartContext } from "../context/CartContext";
export const Cart = () => {
  const productData = products.find((product) => product.id === 2);
  const { cart } = useContext(CartContext);
  const { handleDeleteItemFromCart } = useContext(CartContext);
  console.log(productData);
  console.log(products);

  return (
    <div>
      <h1>Total Items :{cart.length}</h1>
      {cart.map(
        ({ name, description, quantity, category, brand, cartItemId }) => (
          <div key={cartItemId}>
            <p>Name: {name}</p>
            <p>Description: {description}</p>
            <p>Quantity: {quantity}</p>
            <p>Category: {category}</p>
            <p>Brand: {brand}</p>
            <button onClick={() => handleDeleteItemFromCart(cartItemId)}>
              Remove from Cart
            </button>
            <hr />
          </div>
        )
      )}
      <hr />
      <h2>
        Total Price :{" "}
        {cart.reduce((acc, val) => acc + val.price * val.quantity, 0)}
      </h2>
    </div>
  );
};
