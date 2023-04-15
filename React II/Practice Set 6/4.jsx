import "./styles.css";
import { fakeFetch } from "./api/fakefetch";
import { useState, useEffect } from "react";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [libraryData, setLibraryData] = useState([]);

  async function getLibraryData() {
    setIsLoading(true);
    try {
      const { data, status } = await fakeFetch(
        "https://example.com/api/videos"
      );
      if (status === 200) {
        setLibraryData(data.videos);
      }
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    getLibraryData();
  }, []);

  const deleteVideo = () => {
    const newData = [...libraryData];
    newData.shift(); // remove the first element
    setLibraryData(newData);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>Playlist</h1>
      <p>{isLoading && "Loading Playlist..."}</p>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {libraryData.map(({ title, thumbnail, views, likes }) => (
          <div
            key={title}
            style={{ margin: "2px", padding: "2px", alignItems: "stretch" }}
          >
            <img src={thumbnail} alt="thumbnail-img" />
            <br />
            <b>{title}</b>
            <br />
            <b>Likes: </b> {likes}
            <br />
            <b>Views: </b> {views}
          </div>
        ))}
      </div>
      <div>
        <button onClick={deleteVideo}>Delete Video</button>
      </div>
    </div>
  );
}

export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/videos") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            videos: [
              {
                title: "The Power of Habit",
                thumbnail: "https://picsum.photos/200/130",
                views: 1000000,
                likes: 50000,
              },
              {
                title: "How to Code in JavaScript",
                thumbnail: "https://picsum.photos/200/135",
                views: 500000,
                likes: 25000,
              },
              {
                title: "10 Minute Yoga for Beginners",
                thumbnail: "https://picsum.photos/200/131",
                views: 250000,
                likes: 15000,
              },
              {
                title: "Introduction to Machine Learning",
                thumbnail: "https://picsum.photos/200/132",
                views: 100000,
                likes: 10000,
              },
              {
                title: "The Science of Cooking",
                thumbnail: "https://picsum.photos/200/133",
                views: 75000,
                likes: 5000,
              },
              {
                title: "The Art of Public Speaking",
                thumbnail: "https://picsum.photos/200/134",
                views: 50000,
                likes: 2500,
              },
            ],
          },
        });
      } else {
        reject({
          status: 404,
          message: "Videos not found.",
        });
      }
    }, 2000);
  });
};
