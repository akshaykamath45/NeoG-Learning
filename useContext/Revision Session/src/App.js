import { ProductList } from "./pages/ProductList";
import { Cart } from "./pages/Cart";
import { products } from "./data/productsDB";
import { Header } from "./components/Header";
import "./styles.css";
import { Routes, Route, NavLink } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Header />
      <nav>
        <NavLink to="/"> home || </NavLink>
        <NavLink to="/cart"> cart </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<ProductList products={products} />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}
