import { useEffect, useState } from "react";
import { fakeFetch } from "./api/fakefetch";
import "./styles.css";

export default function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const getProducts = async () => {
    try {
      const { data, status } = await fakeFetch(
        "https://example.com/api/products"
      );
      if (status === 200) {
        setProducts(data.products);
        console.log({ data: data.products });
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  const showShoes = () => {
    const filterShoes = products.filter(({ name }) => name === "Shoes");
    setFilteredProducts(filterShoes);
  };
  const showTshirt = () => {
    const filterTshirt = products.filter(({ name }) => name === "Tshirt");
    setFilteredProducts(filterTshirt);
  };
  const showTrekkingBag = () => {
    const filterTrekkingBag = products.filter(
      ({ name }) => name === "Trekking Bag"
    );
    setFilteredProducts(filterTrekkingBag);
  };

  return (
    <div className="App">
      <button onClick={showShoes}>Show Shoes</button>
      <button onClick={showTshirt}>Show Tshirt</button>
      <button onClick={showTrekkingBag}>Show Trekking Bag</button>
      {filteredProducts.map(({ name, price, desc, src }) => (
        <div>
          <img
            src={src}
            width="200px"
            height="200px"
            alt="product-img"
            paddingTop="10px"
          ></img>
          <h2>Name: {name}</h2>
          <p>
            <b>Price:</b>Rs. {price}
          </p>
          <p>
            <b>Description:</b>
            {desc}
          </p>
        </div>
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
              {
                name: "Shoes",
                price: 3000,
                desc: "lorem ipsum dolor sit amit",
                src: "https://picsum.photos/200/200",
              },
              {
                name: "Tshirt",
                price: 500,
                inStock: false,
                desc: "lorem ipsum dolor sit amit",
                src: "https://picsum.photos/201/201",
              },
              {
                name: "Trekking Bag",
                price: 2000,
                inStock: true,
                desc: "lorem ipsum dolor sit amit",
                src: "https://picsum.photos/205/205",
              },
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
