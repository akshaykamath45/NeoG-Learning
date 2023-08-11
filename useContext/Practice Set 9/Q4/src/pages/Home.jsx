import { useNavigate } from "react-router-dom";
export const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h3>Welcome to Video Library</h3>
      <h3>
        To browse all videos,click the below button or go to the videos page.
      </h3>
      <button onClick={() => navigate("/videos")}>Explore</button>
    </div>
  );
};
