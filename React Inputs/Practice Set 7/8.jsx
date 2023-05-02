import "./styles.css";
import { fakeFetch } from "./api/fakefetch";
import { useState, useEffect } from "react";

export default function App() {
  const [products, setProducts] = useState([]);
  const [resetProduct, setResetProduct] = useState([]);
  const getProductsData = async () => {
    try {
      const { data, status } = await fakeFetch(
        "https://example.com/api/products"
      );
      if (status === 200) {
        setProducts(data.products);
        setResetProduct(data.products);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);

  const sortProductsInAscending = () => {
    const sortedProductsLowToHigh = products
      .slice()
      .sort((product1, product2) => product1.price - product2.price);
    setProducts(sortedProductsLowToHigh);
  };

  const sortProductsInDescending = () => {
    const sortedProductsHighToLow = products
      .slice()
      .sort((product1, product2) => product2.price - product1.price);
    setProducts(sortedProductsHighToLow);
  };

  const resetProducts = () => {
    setProducts(resetProduct);
  };
  return (
    <div>
      <h1>Products</h1>
      <button onClick={sortProductsInAscending}>Low to High</button>
      <button onClick={sortProductsInDescending}>High to Low</button>
      <button onClick={resetProducts}>Reset</button>
      {products.map(({ name, description, price, quantity }) => (
        <li>
          <h3>{name}</h3>
          <p>{description}</p>
          <p>${price}</p>
          <p>Quantity: {quantity}</p>
        </li>
      ))}
    </div>
  );
}

const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/products") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            products: [
              {
                name: "Product 1",
                description: "This is the first product",
                price: 25.99,
                quantity: 10,
              },
              {
                name: "Product 2",
                description: "This is the second product",
                price: 19.99,
                quantity: 15,
              },
              {
                name: "Product 3",
                description: "This is the third product",
                price: 35.5,
                quantity: 5,
              },
              {
                name: "Product 4",
                description: "This is the fourth product",
                price: 49.99,
                quantity: 20,
              },
            ],
          },
        });
      } else {
        reject({
          status: 404,
          message: "Product list not found.",
        });
      }
    }, 2000);
  });
};
