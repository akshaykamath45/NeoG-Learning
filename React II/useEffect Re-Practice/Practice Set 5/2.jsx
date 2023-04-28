import "./styles.css";
import { fakeFetch } from "./api/fakefetch";
import { useState, useEffect } from "react";

export default function App() {
  const [productData, setProductData] = useState([]);
  async function getProductData() {
    try {
      const { data, status } = await fakeFetch(
        "https://example.com/api/products"
      );
      if (status === 200) {
        setProductData(data.products);
      }
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    getProductData();
  }, []);
  const filterProducts = () => {
    const filteredProduct = productData.filter(({ quantity }) => quantity > 20);
    setProductData(filteredProduct);
  };
  return (
    <div>
      <h1>Products</h1>
      <button onClick={filterProducts}>
        Show products with quantity more than 20
      </button>{" "}
      <br />
      <br />
      {productData.map(({ name, price, quantity }) => (
        <li>
          {name} - Rs.{price} - Quantity: {quantity}
        </li>
      ))}
    </div>
  );
}

export const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://example.com/api/products") {
          resolve({
            status: 200,
            message: "Success",
            data: {
              products: [
                { name: "Color Pencils", price: 50, quantity: 40 },
                { name: "Sketchpens", price: 110, quantity: 20 },
                { name: "Erasor", price: 20, quantity: 20 },
                { name: "Sharpner", price: 22, quantity: 30 }
              ]
            }
          });
        } else {
          reject({
            status: 404,
            message: "Items list not found."
          });
        }
      }, 2000);
    });
  };