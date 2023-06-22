import { useState } from "react";
import { createContext } from "react";
import { v4 as uuidv4 } from "uuid";
export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const handleAddToWishlist = (item) => {
    const wishlistItem = { ...item, wishlistItemId: uuidv4() };
    setWishlist([...wishlist, wishlistItem]);
  };
  // const handleAddToWishlist = (item) => {
  //   setWishlist([...wishlist, item]);
  // };

  const deleteFromWishlist = (wishlistItemId) => {
    const updatedWishlist = wishlist.filter(
      (item) => item.wishlistItemId !== wishlistItemId
    );
    setWishlist(updatedWishlist);
  };
  return (
    <WishlistContext.Provider
      value={{ wishlist, handleAddToWishlist, deleteFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
