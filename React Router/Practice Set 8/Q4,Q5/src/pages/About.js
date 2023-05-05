import { fakeFetch, products } from "../api/fakefetch";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import products from "./ProductListing";
import { Link } from "react-router-dom";
export const About = () => {
  // const [products, setProducts] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const getProductData = async () => {
  //   try {
  //     setIsLoading(true);
  //     const { data, status } = await fakeFetch(
  //       "https://example.com/api/products"
  //     );
  //     if (status === 200) {
  //       setProducts(data.products);
  //     }
  //     setIsLoading(false);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // useEffect(() => {
  //   getProductData();
  // }, []);

  const { productID } = useParams();

  const productData = products.find(
    (product) => product.id === parseInt(productID)
  );

  console.log(productID);

  console.log(productData);
  console.log(products);

  return (
    <div>
      <h1>About</h1>
      {/* <p>Item: {productData.id}</p> */}
      <p>Name: {productData.name}</p>
      <p>Descriptipn: {productData.description}</p>
      <p>Quantity: {productData.quantity}</p>
      <p>Category: {productData.category}</p>
      <p>Brand: {productData.brand}</p>
    </div>
  );
};
