import "./styles.css";
import Home from "./pages/Home";
import Category from "./pages/Category";
import ProductDetail from "./pages/ProductDetail";
import WishList from "./pages/WishList";
import Cart from "./pages/Cart";
import { Routes, Route, useSearchParams } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

export default function App() {
  const activeStyle = ({ isActive }) => {
    return {
      color: isActive ? "red" : "black",
      backgroundColor: isActive ? "lightpink" : "white"
    };
  };

  return (
    <div className="App">
      <nav>
        <NavLink to="/" style={activeStyle}>
          {" "}
          Home{" "}
        </NavLink>{" "}
        ||
        <NavLink to="/category" style={activeStyle}>
          {" "}
          Category{" "}
        </NavLink>{" "}
        ||
        <NavLink to="/cart" style={activeStyle}>
          Cart{" "}
        </NavLink>{" "}
        ||
        <NavLink to="/wishlist" style={activeStyle}>
          WishList{" "}
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/product/:productID" element={<ProductDetail />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}
