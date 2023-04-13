import { useState } from "react";
import "./styles.css";
import { fakeFetch } from "./api/fakefetch";
export default function App() {
  const [products, setProducts] = useState([]);
  const handleClick = async () => {
    try {
      const { data, status } = await fakeFetch(
        "https://example.com/api/products"
      );
      if (status === 200) {
        console.log({ data: data.products });
        setProducts(data.products);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="App">
      <div className="App">
        <div className="App">
          <h1>My Products</h1>
        </div>
        <button onClick={handleClick}>get products details</button>
        <ul>
          {products.map(({ id, name, price, quantity }) => {
            return (
              <li key={id}>
                <h2>Name : {name}</h2>
                <p>Price : {price}</p>
                <p>Quantity : {quantity}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
