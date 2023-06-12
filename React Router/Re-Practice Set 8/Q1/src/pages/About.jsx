import { fakeFetch, products } from "../fakeFetch";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
export const About = () => {
  const { productID } = useParams();

  const productData = products.find(
    (product) => product.id === parseInt(productID)
  );

  const { name, description, price, quantity, category, brand } = productData;
  return (
    <div>
      <h1>About</h1>
      <p>Name: {name}</p>
      <p>Description: {description}</p>
      <p>Quantity: {quantity}</p>
      <p>Category: {category}</p>
      <p>Brand: {brand}</p>
    </div>
  );
};
