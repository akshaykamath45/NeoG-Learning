import { useContext } from "react";
import { products } from "../api/fakefetch";
import { WishlistContext } from "../context/WishlistContext";
export const Wishlist = () => {
  // const productData = products.find((product) => product.id === 3);
  const { wishlist } = useContext(WishlistContext);
  const { deleteFromWishlist } = useContext(WishlistContext);
  // console.log(productData);
  // console.log(products);

  return (
    <div>
      <h1>Wishlist Items : {wishlist.length}</h1>
      {wishlist.map(({ name, description, wishlistItemId }) => (
        <div key={wishlistItemId}>
          <p>{name}</p>
          <p>{description}</p>
          <button onClick={() => deleteFromWishlist(wishlistItemId)}>
            Remove From Wishlist
          </button>
          <hr />
        </div>
      ))}
    </div>
  );
};
