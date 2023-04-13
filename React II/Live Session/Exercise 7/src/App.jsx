import "./styles.css";
import { fakeFetch } from './api/fakeFetch' 
import {useEffect} from "react";
export default function App() {
  const getData = async () => {
    try {
      const { data, status } = await fakeFetch("https://example.com/api/products");
      if (status === 200) {
        console.log({ data: data.products });
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    console.log("inside useEffect hook");
    getData();
  }, []);

  console.log("Before render.. ");

  return (
    <div className="App">
      <div className="App">
        <h1> Showcase Products </h1>
      </div>
    </div>
  );
}
