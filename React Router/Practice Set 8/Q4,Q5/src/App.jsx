import "./styles.css";
import { fakeFetch } from "./api/fakefetch";
import { useState, useEffect } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import { Cart } from "./pages/Cart";
import { Home } from "./pages/Home";
import { ProductListing } from "./pages/ProductListing";
import { Wishlist } from "./pages/WishList";
import { About } from "./pages/About";
import { Error } from "./pages/Error";
export default function App() {
  const getActiveStyle = ({ isActive }) => {
    return {
      color: isActive ? "green" : "black",
      backgroundColor: isActive ? "lightyellow" : "white"
    };
  };
  return (
    <div>
      <nav>
        <NavLink to="/" style={getActiveStyle}>
          Home
        </NavLink>{" "}
        ||
        <NavLink to="/products" style={getActiveStyle}>
          Products
        </NavLink>{" "}
        ||
        <NavLink to="/cart" style={getActiveStyle}>
          Cart
        </NavLink>{" "}
        ||
        <NavLink to="/wishlist" style={getActiveStyle}>
          Wishlist
        </NavLink>{" "}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/product/:productID" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}
