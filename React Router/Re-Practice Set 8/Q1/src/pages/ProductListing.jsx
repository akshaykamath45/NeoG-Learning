import { fakeFetch } from "../fakeFetch";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getData = async () => {
    setIsLoading(true);
    try {
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
    getData();
  }, []);
  return (
    <div>
      {isLoading && <h1>Loading Products Data... </h1>}
      <h1>Product Listing Page</h1>
      {products.map(({ id, name, description, price }) => (
        <div key={id}>
          <b>{name}</b>
          <p>{description}</p>
          <p>Price: {price}</p>
          <Link to={`/products/${id}`}>Visit Item</Link>
        </div>
      ))}
    </div>
  );
};
