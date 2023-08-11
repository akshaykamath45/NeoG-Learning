import "./styles.css";
import { Routes, Route, NavLink } from "react-router-dom";
import { Home } from "./pages/Home";
import { VideoListing } from "./pages/VideoListing";
import { LikedVideos } from "./pages/LikedVideos";
import { WatchLater } from "./pages/WatchLater";
import { IndivisualVideo } from "./pages/IndivisualVideo";
import { useContext } from "react";
import { VideoContext } from "./contexts/VideoContext";
export default function App() {
  const { videos, setVideos } = useContext(VideoContext);
  const videosLiked = videos.filter((video) => video.liked);
  const watchLaterVideos = videos.filter((video) => video.watchLater);
  return (
    <div className="App">
      <nav>
        <NavLink to="/">Home</NavLink> ||
        <NavLink to="/videos">Videos</NavLink> ||
        <NavLink to="/likedVideos">
          Liked Videos {videosLiked.length > 0 && videosLiked.length}
        </NavLink>{" "}
        ||
        <NavLink to="/watchLater">
          Watch Later {watchLaterVideos.length > 0 && watchLaterVideos.length}
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/videos"
          element={<VideoListing videos={videos} setVideos={setVideos} />}
        />
        <Route path="/likedVideos" element={<LikedVideos videos={videos} />} />
        <Route
          path="/watchLater"
          element={<WatchLater videos={videos} setVideos={setVideos} />}
        />
        <Route
          path="/video/:videoId"
          element={<IndivisualVideo videos={videos} setVideos={setVideos} />}
        />
      </Routes>
    </div>
  );
}
