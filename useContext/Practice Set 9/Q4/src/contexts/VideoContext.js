import { createContext, useState, useEffect } from "react";
import { fakeFetch } from "../data/fakeFetch";

export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const getData = async () => {
    try {
      const { data, status } = await fakeFetch(
        "https://example.com/api/videos"
      );
      if (status === 200) {
        setVideos(data.videos);
      }
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <VideoContext.Provider value={{ videos, setVideos }}>
      {children}
    </VideoContext.Provider>
  );
};
