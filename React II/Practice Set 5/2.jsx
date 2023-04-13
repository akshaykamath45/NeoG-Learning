import "./styles.css";
import { fakeFetch2 } from "./api/fakefetch2";
import { useEffect, useState } from "react";
export default function App() {
  const [products, setProducts] = useState([]);

  const getProductData = async () => {
    try {
      const { data, status } = await fakeFetch2(
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

  // useEffect(()=>{
  //   getData();
  // },[])
  return (
    <div className="App">
      <h1>Products</h1>
      <button onClick={getProductData}>Show products</button>
      <ul>
        {products.map(({ name, price, quantity }) =>
          quantity > 20 ? (
            <li key={name}>
              <b>
                <p>
                  {name} - Rs. {price} - Quantity: {quantity}
                </p>
              </b>
            </li>
          ) : (
            <></>
          )
        )}
      </ul>
    </div>
  );
}

export const fakeFetch2 = (url) => {
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
              { name: "Sharpner", price: 22, quantity: 30 },
            ],
          },
        });
      } else {
        reject({
          status: 404,
          message: "Items list not found.",
        });
      }
    }, 2000);
  });
};
