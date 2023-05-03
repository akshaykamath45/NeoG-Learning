import "./styles.css";
import { fakeFetch } from "./api/fakefetch";
import { useState, useEffect } from "react";

export default function App() {
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState(products);
  const getProductsData = async () => {
    try {
      const { data, status } = await fakeFetch(
        "https://example.com/api/products"
      );
      if (status === 200) {
        setProducts(data.products);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);

  // const sortProducts=products.slice().sort((product1,product2)=>product1.rating-product2.rating)
  // setSortedProducts(sortProducts)

  return (
    <div>
      <h1> Products </h1>
      {products
        .sort((product1, product2) => product2.rating - product1.rating)
        .map(({ name, price, quantity, rating }) => (
          <li
            style={{
              border: "1px solid black",
              borderRadius: "4px",
              padding: "2px",
              margin: "8px",
              listStyle: "none",
            }}
          >
            <p>
              {name} Rating: {rating}{" "}
            </p>
            <p>Price: {price}</p>
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
              { name: "Color Pencils", price: 50, quantity: 40, rating: 4.5 },
              { name: "Sketchpens", price: 110, quantity: 20, rating: 3.8 },
              { name: "Eraser", price: 20, quantity: 20, rating: 4.2 },
              { name: "Sharpener", price: 22, quantity: 30, rating: 4.7 },
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
