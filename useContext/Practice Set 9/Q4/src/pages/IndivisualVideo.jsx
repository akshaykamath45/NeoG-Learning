import { useParams, Link, useNavigate } from "react-router-dom";
export const IndivisualVideo = ({ videos, setVideos }) => {
  const { videoId } = useParams();
  const selectedVideo = videos.find(
    (video) => video.id === parseInt(videoId, 10)
  );
  console.log(selectedVideo);

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
      <h1>{selectedVideo.title}</h1>
      <div className="video-card">
        <img
          src={selectedVideo.thumbnail}
          className="video-image"
          alt="video=img"
        />
        <p>
          <b>{selectedVideo.title}</b>
        </p>
        <Link to={`${selectedVideo.url}`}>Watch Here</Link> <br />
        <p>
          <b>description: {selectedVideo.description}</b>
        </p>
        <p>
          <i>Duration: {selectedVideo.duration}</i>
        </p>
        {!selectedVideo.liked ? (
          <button onClick={() => handleLikeButton(selectedVideo)}>Like</button>
        ) : (
          <button onClick={() => handleLikeButton(selectedVideo)}>
            Unlike
          </button>
        )}
        {!selectedVideo.watchLater ? (
          <button onClick={() => handleWatchLaterButton(selectedVideo)}>
            Add to Watch Later
          </button>
        ) : (
          <button onClick={() => navigate("/watchLater")}>
            Go to Watch Later
          </button>
        )}
      </div>
    </div>
  );
};
