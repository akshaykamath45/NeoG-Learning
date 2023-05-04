import { fakeFetch } from "../api/fakefetch";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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
        {products.map(({ id, name, description, price }) => (
          <li style={{ listStyle: "none" }}>
            <b>{name}</b>
            <p>{description}</p>
            <p>Price: {price}</p>
            <Link to={`/product/${id}`}>Visit Item</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
