import { useNavigate } from "react-router-dom";
export const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Welcome to neoG Food Ordering App</h1>
      <button onClick={() => navigate("/menu")}>Go to Menu</button>
    </div>
  );
};
