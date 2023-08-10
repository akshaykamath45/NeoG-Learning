import "./styles.css";
import { Routes, Route, NavLink } from "react-router-dom";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { Cart } from "./pages/Cart";
import { useContext } from "react";
import { MenuContext } from "./contexts/MenuContext";
export default function App() {
  const { menu, setMenu, isLoading } = useContext(MenuContext);
  const cartItems = menu.filter((food) => food.cart);
  return (
    <div className="App">
      <nav>
        <NavLink to="/">Home</NavLink> ||
        <NavLink to="/menu">Menu</NavLink> ||
        <NavLink to="/cart">
          Cart {cartItems.length > 0 && cartItems.length}
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/menu"
          element={<Menu menu={menu} setMenu={setMenu} isLoading={isLoading} />}
        />
        <Route path="/cart" element={<Cart menu={menu} setMenu={setMenu} />} />
      </Routes>
    </div>
  );
}
