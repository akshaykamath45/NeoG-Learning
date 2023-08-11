export const WatchLater = ({ videos, setVideos }) => {
  const watchLaterVideos = videos.filter((video) => video.watchLater);
  const removeFromWatchLater = (video) => {
    const removeWatchLater = videos.map((selectedVideo) =>
      selectedVideo.id === video.id
        ? { ...selectedVideo, watchLater: false }
        : selectedVideo
    );
    setVideos(removeWatchLater);
  };
  return (
    <div>
      <h1>Watch Later</h1>
      {watchLaterVideos.length === 0 && <h2>No watch later videos found ):</h2>}
      <div className="video-listing">
        {watchLaterVideos.map((video) => (
          <div key={video.id} className="video-card">
            <img
              src={video.thumbnail}
              alt="video-img"
              className="video-image"
            />
            <p>{video.title}</p>
            <button onClick={() => removeFromWatchLater(video)}>
              Remove from Watch Later
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
