import "./styles.css";
import { useEffect, useState } from "react";
import { fakeFetch } from "./api/fakefetch";
export default function App() {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const { data, status } = await fakeFetch(
        "https://example.com/api/wishlist"
      );
      if (status === 200) {
        setData(data.wishlist);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <h1 className="app-header">tanaypratap's box</h1>
      <div className="App">
        <h1> Showcase Wishlist </h1>
        <ul>
          {data.map(({ name, price, quantity }) => (
            <li>
              <h2>{name}</h2>
              <p>{price}</p>
              <p>{quantity}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
