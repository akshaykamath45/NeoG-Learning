import { useContext } from "react";
import { products } from "../api/fakefetch";
import { WishlistContext } from "../contexts/WishlistContext";
export const Wishlist = () => {
  const { wishList, handleWishlistItemDelete } = useContext(WishlistContext);

  return (
    <div>
      {wishList.length === 0 && <h2>No items in the Wishlist ◔̯◔</h2>}
      <h3>Wishlist Items: {wishList.length}</h3>
      {wishList.map(({ id, name, quantity, description, category, brand }) => (
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
          <p>Description: {description}</p>
          <p>Quantity: {quantity}</p>
          <p>Category: {category}</p>
          <p>Brand:{brand}</p>
          <button onClick={() => handleWishlistItemDelete(id)}>
            Remove from Wishlist
          </button>
        </div>
      ))}
    </div>
  );
};
