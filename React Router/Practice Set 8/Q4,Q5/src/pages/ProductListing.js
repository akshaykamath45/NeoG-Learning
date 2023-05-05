import { fakeFetch } from "../api/fakefetch";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { WishlistContext } from "../contexts/WishlistContext";
export const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { handleCartUpdate } = useContext(CartContext);
  const { handleWishlistUpdate } = useContext(WishlistContext);
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
            handleCartUpdate(item);
          };
          const handleWishlistClick = () => {
            handleWishlistUpdate(item);
          };

          return (
            <div>
              <li style={{ listStyle: "none" }}>
                <b>{name}</b>
                <p>{description}</p>
                <p>Price: {price}</p>
                <Link to={`/product/${id}`}>Visit Item</Link>
                <br />
                <button onClick={handleProductClick}>Add to Cart</button>{" "}
                <button onClick={handleWishlistClick}>Add to Wishlist</button>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
