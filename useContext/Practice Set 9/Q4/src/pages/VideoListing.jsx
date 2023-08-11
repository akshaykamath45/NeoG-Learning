import "./VideoListing.css";

import { Link, useNavigate } from "react-router-dom";
export const VideoListing = ({ videos, setVideos }) => {
  const handleLikeButton = (video) => {
    const updateLikedVideo = videos.map((selectedVideo) =>
      selectedVideo.id === video.id
        ? { ...selectedVideo, liked: !video.liked }
        : selectedVideo
    );
    setVideos(updateLikedVideo);
  };
  const handleWatchLaterButton = (video) => {
    const updateWatchLaterVideo = videos.map((selectedVideo) =>
      selectedVideo.id === video.id
        ? { ...selectedVideo, watchLater: true }
        : selectedVideo
    );
    setVideos(updateWatchLaterVideo);
  };
  const navigate = useNavigate();
  return (
    <div>
      <h1>All Videos</h1>
      <div className="video-listing">
        {videos.map((video) => (
          <div key={video.id} className="video-card">
            <img
              src={video.thumbnail}
              alt="video-img"
              className="video-image"
            />
            <p>{video.title}</p>
            <Link to={`/video/${video.id}`}>Watch here</Link> <br />
            {!video.liked ? (
              <button onClick={() => handleLikeButton(video)}>Like</button>
            ) : (
              <button onClick={() => handleLikeButton(video)}>Unlike</button>
            )}
            {!video.watchLater ? (
              <button onClick={() => handleWatchLaterButton(video)}>
                Add to Watch Later
              </button>
            ) : (
              <button onClick={() => navigate("/watchLater")}>
                Go to Watch Later
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
