import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export function Cart() {
  const { cart } = useContext(CartContext);
  return (
    <div>
      {cart.length === 0 && (
        <h2>Cart is empty,Please add some items to the cart :)</h2>
      )}
      {cart.map(({ id, name, price }) => {
        return (
          <div
            key={id}
            style={{
              border: "1px solid gray",
              margin: "0.5rem",
              padding: "0.5rem"
            }}
          >
            <h2>
              {name} <small> INR {price} </small>
            </h2>
          </div>
        );
      })}
      <h3>
        Total Price :{cart.reduce((total, item) => total + item.price, 0)}
      </h3>
    </div>
  );
}
