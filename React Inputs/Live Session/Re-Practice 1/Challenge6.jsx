import "./styles.css";
import { useState } from "react";
export default function App() {
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

  const [productData, setProductData] = useState([]);

  const sortElements = () => {
    const sortedArray = products.sort((obj1, obj2) => obj1.price - obj2.price);
    setProductData(sortedArray);
  };

  return (
    <div className="App">
      <h1>Product List</h1>
      Price: <button onClick={sortElements}> Low To High</button>
      {productData.map(({ id, name, price }) => (
        <div>
          <p>Item: {id}</p>
          <p>Price: {price}</p>
        </div>
      ))}
    </div>
  );
}
