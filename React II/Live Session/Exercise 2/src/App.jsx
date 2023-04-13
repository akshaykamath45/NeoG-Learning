import "./styles.css";
import { useState } from "react";
import { fakeFetch } from "./api/fakefetch";
export default function App() {
  const [products, setProducts] = useState([]);

  const handleData = async () => {
    try {
      const { data, status } = await fakeFetch(
        "https://example.com/api/employees"
      );
      if (status === 200) {
        console.log({ data: data.products });
        setProducts(data.products);
      }
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div className="App">
      <div className="App">
        <h1>Product List</h1>
      </div>
      <button onClick={handleData}>show employees</button>
      <ul>
        {products.map(({ id, name, workExperience }) => {
          return (
            <li key={id}>
              <h3>{name}</h3>
              <p>Work Experience : {workExperience}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
