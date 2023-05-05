import { createContext } from "react";
import { useState } from "react";
export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishList, setWishList] = useState([]);
  const handleWishlistUpdate = (item) => {
    setWishList((wishList) => [...wishList, item]);
  };

  const handleWishlistItemDelete = (id) => {
    const deleteItem = wishList.filter((item) => item.id !== id);
    setWishList(deleteItem);
  };
  return (
    <WishlistContext.Provider
      value={{ wishList, handleWishlistUpdate, handleWishlistItemDelete }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
