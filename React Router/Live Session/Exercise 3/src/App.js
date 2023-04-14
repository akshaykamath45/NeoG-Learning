import "./styles.css";
import Home from "./pages/Home";
import Category from "./pages/Category";
import ProductDetail from "./pages/ProductDetail";
import WishList from "./pages/WishList";
import Cart from "./pages/Cart";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
const getActiveStyle = ({ isActive }) => ({
  color: isActive ? "red" : "",
  padding: isActive ? "1rem" : "0.5rem"
});
export default function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to="/" style={getActiveStyle}>
          {" "}
          Home{" "}
        </NavLink>{" "}
        ||
        <NavLink to="/category" style={getActiveStyle}>
          {" "}
          Category{" "}
        </NavLink>{" "}
        ||
        <NavLink to="/cart" style={getActiveStyle}>
          Cart{" "}
        </NavLink>{" "}
        ||
        <NavLink to="/wishlist" style={getActiveStyle}>
          WishList{" "}
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/product" element={<ProductDetail />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}
