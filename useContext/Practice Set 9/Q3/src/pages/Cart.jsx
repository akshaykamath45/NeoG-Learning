import { useState } from "react";
export const Cart = ({ menu, setMenu }) => {
  const cartItems = menu.filter((food) => food.cart);
  const [appliedCoupon, setAppliedCoupon] = useState(false);

  const totalPrice = cartItems.reduce(
    (acc, item) => (item ? acc + item.price : acc),
    0
  );
  const [price, setPrice] = useState(totalPrice);

  console.log(cartItems);
  const applyCoupon = () => {
    setAppliedCoupon(true);
    setPrice(totalPrice - 5);
  };
  const removeCoupon = () => {
    setAppliedCoupon(false);
    setPrice(totalPrice);
  };
  const handleRemoveFromCart = (food) => {
    const updateCart = menu.map((item) =>
      item.id === food.id ? { ...item, cart: false } : item
    );
    setMenu(updateCart);

    const updatedCartItems = updateCart.filter((food) => food.cart);
    const updatedTotalPrice = updatedCartItems.reduce(
      (acc, item) => (item ? acc + item.price : acc),
      0
    );
    setPrice(updatedTotalPrice);
  };
  return (
    <div>
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <div>
          <h2>No items currently,please add some items (:</h2>
        </div>
      ) : (
        <div>
          <h3>
            Total Delivery Time:{" "}
            {cartItems.reduce((acc, item) => acc + item.delivery_time, 0)}{" "}
            minutes
          </h3>
          <h3>Total Price: {price}</h3>
          {!appliedCoupon && (
            <button onClick={applyCoupon}>Apply Coupon</button>
          )}
          {appliedCoupon && (
            <button onClick={removeCoupon}>Remove Coupon</button>
          )}

          {
            <div className="menu-list">
              {cartItems.map((food) => (
                <div className="menu-item" key={food.id}>
                  <img
                    src={food.image}
                    className="menu-image"
                    alt="menu-img"
                  ></img>
                  <p>Name: {food.name}</p>
                  <p>
                    <b>description: </b>
                    {food.description}
                  </p>

                  <p>Price: {food.price}</p>
                  <p>Delivery Time: {food.delivery_time}</p>
                  <button onClick={() => handleRemoveFromCart(food)}>
                    Remove from Cart
                  </button>
                </div>
              ))}
            </div>
          }
        </div>
      )}
    </div>
  );
};
