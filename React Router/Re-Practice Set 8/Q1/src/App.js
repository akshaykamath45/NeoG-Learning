import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { Cart } from "./pages/Cart";
import { ProductListing } from "./pages/ProductListing";
import { About } from "./pages/About";
import { Wishlist } from "./pages/Wishlist";
import { Home } from "./pages/Home";
import { Error } from "./pages/Error";
import { NavLink } from "react-router-dom";

export default function App() {
  const getActiveStyle = ({ isActive }) => {
    return {
      color: isActive ? "green" : "black",
      backgroundColor: isActive ? "yellow" : "white"
    };
  };
  return (
    <div className="App">
      <nav>
        <NavLink to="/" style={getActiveStyle}>
          Home
        </NavLink>{" "}
        ||
        <NavLink to="/cart" style={getActiveStyle}>
          Cart
        </NavLink>{" "}
        ||
        <NavLink to="/wishlist" style={getActiveStyle}>
          Wishlist
        </NavLink>{" "}
        ||
        <NavLink to="/products" style={getActiveStyle}>
          Products
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/wishlist" element={<Wishlist />}></Route>
        <Route path="/products" element={<ProductListing />}></Route>
        <Route path="/products/:productID" element={<About />}></Route>
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}
