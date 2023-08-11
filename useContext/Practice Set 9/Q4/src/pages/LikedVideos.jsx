export const LikedVideos = ({ videos }) => {
  const videosLiked = videos.filter((video) => video.liked);
  console.log(videosLiked);
  return (
    <div>
      <h1>Liked Videos</h1>
      {videosLiked.length === 0 && <h2>No liked videos found ):</h2>}
      {
        <div className="video-listing">
          {videosLiked.map((video) => (
            <div key={video.id} className="video-card">
              <img
                src={video.thumbnail}
                alt="video-img"
                className="video-image"
              />
              <p>{video.title}</p>
            </div>
          ))}
        </div>
      }
    </div>
  );
};
