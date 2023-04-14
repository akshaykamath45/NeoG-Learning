import "./styles.css";
import { useState } from "react";
export default function App() {
  const [sortedProducts, setSortedProducts] = useState([]);
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 10.99,
    },
    {
      id: 2,
      name: "Product 2",
      price: 5.99,
    },
    {
      id: 3,
      name: "Product 3",
      price: 15.99,
    },
    {
      id: 4,
      name: "Product 4",
      price: 7.99,
    },
    {
      id: 5,
      name: "Product 5",
      price: 12.99,
    },
  ];

  const sortPrices = () => {
    const sortProducts = products.sort((a, b) => a.price - b.price);
    console.log(sortedProducts);
    setSortedProducts(sortProducts);
  };
  return (
    <div className="App">
      <h1>Product List</h1>
      Price: <button onClick={sortPrices}>Low To High</button>
      <ul>
        {sortedProducts.map(({ id, name, price }) => (
          <li key={id}>
            <p>Name: {name}</p>
            <p>Price: {price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
