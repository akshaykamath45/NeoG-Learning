import "./styles.css";
import { fakeFetch } from "./api/fakefetch";
import { useState, useEffect } from "react";

export default function App() {
  const [videoDetails, setVideoDetails] = useState({});
  const [showLabel, setShowLabel] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const getVideoData = async () => {
    setIsLoading(true);
    try {
      const { data, status, message } = await fakeFetch(
        "https://example.com/api/getvideo"
      );
      if (status === 200) {
        setVideoDetails(data.videos);
      }
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getVideoData();
  }, []);

  const addLabel = () => {
    const labelObj = { ...videoDetails, label: "Self Motivational" };
    setVideoDetails(labelObj);
    setShowLabel(true);
  };
  const { title, thumbnail, views, likes, label } = videoDetails;
  return (
    <div>
      <h1>Video</h1>
      <p>{isLoading && "Loading Video Details ..."}</p>
      <img src={thumbnail} alt="thumbnail-img" />
      <br />
      <b>{title}</b> <br />
      <b>Views: </b>
      {views}
      <br />
      <b>Likes: </b>
      {likes}
      <br />
      <b>{showLabel && "Label: "}</b>
      {label}
      <br />
      <button onClick={addLabel}>Add Label</button>
    </div>
  );
}

export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/getvideo") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            videos: {
              title: "The Power of Habit",
              thumbnail: "https://picsum.photos/250/130",
              views: 1000000,
              likes: 50000,
            },
          },
        });
      } else {
        reject({
          status: 404,
          message: "Video not found.",
        });
      }
    }, 2000);
  });
};
