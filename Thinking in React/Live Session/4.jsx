import "./styles.css";

const fruits = [
  { id: 1, name: "Apple", price: 20 },
  { id: 2, name: "Orange", price: 54 },
  { id: 3, name: "Grapes", price: 30 },
  { id: 4, name: "Pineapple", price: 70 }
];

const phones = [
  { id: 1, name: "Apple", price: 150000 },
  { id: 2, name: "RedMi", price: 30000 },
  { id: 3, name: "RealMe", price: 70000 },
  { id: 4, name: "Samsung", price: 70000 }
];

function ProductCard({ name, price }) {
  return (
    <li
      style={{
        listStyle: "none",
        border: "2px solid black",
        padding: "4px",
        margin: "2px"
      }}
    >
      <p>Name : {name}</p>
      <p>Price : {price} </p>
    </li>
  );
}

function ProductList({ productList, productHeader }) {
  return (
    <div>
      <h1>{productHeader}</h1>
      {productList.map(({ name, price }) => (
        <ProductCard name={name} price={price} />
      ))}
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <div className="app-body">
        <ProductList productList={fruits} productHeader="fruits" />
        <ProductList productList={phones} productHeader="phone" />
      </div>
    </div>
  );
}
