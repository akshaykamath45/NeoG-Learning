import { fakeFetch } from "../api/fakefetch";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";
export const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { handleAddToCart } = useContext(CartContext);
  const { handleAddToWishlist } = useContext(WishlistContext);
  const getProductData = async () => {
    try {
      setIsLoading(true);
      const { data, status } = await fakeFetch(
        "https://example.com/api/products"
      );
      if (status === 200) {
        setProducts(data.products);
      }
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <div>
      {/* <h1>Welcome to Product Listing Page</h1> */}
      {isLoading && <h1>Loading Products.....</h1>}
      <ul>
        {products.map((item) => {
          const { id, name, description, price } = item;

          const handleProductClick = () => {
            handleAddToCart(item);
            handleAddToWishlist(item);
          };
          return (
            <li style={{ listStyle: "none" }}>
              <b>{name}</b>
              <p>{description}</p>
              <p>Price: {price}</p>
              <Link to={`/product/${id}`}>Visit Item</Link> <br />
              <button onClick={handleProductClick}>Add To Cart</button>
              <button onClick={handleProductClick}>Add to Wishlist</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
