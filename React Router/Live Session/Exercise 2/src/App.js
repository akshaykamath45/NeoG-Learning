import "./styles.css";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";
import Wishlist from "./pages/WishList";
import { Routes, Route } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/productDetail">Product Detail</NavLink>
        <NavLink to="/cart">Cart</NavLink>
        <NavLink to="/wishlist">WishList</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/productdetail" element={<ProductDetail />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/wishlist" element={<Wishlist />}></Route>
      </Routes>
    </div>
  );
}
