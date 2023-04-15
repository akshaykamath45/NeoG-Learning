import "./styles.css";
import { fakeFetch } from "./api/fakefetch";
import { useState, useEffect } from "react";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [socialMediaData, setSocialMediaData] = useState([]);

  async function getSocialMediaData() {
    setIsLoading(true);
    try {
      const { data, status } = await fakeFetch("https://example.com/api/posts");
      if (status === 200) {
        setSocialMediaData(data.posts);
      }
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    getSocialMediaData();
  }, []);

  const showBakery = () => {
    const filterBakeryItems = socialMediaData.filter(
      ({ category }) => category === "Bakery"
    );
    setSocialMediaData(filterBakeryItems);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>Social Media Data</h1>
      <p>{isLoading && "Loading Data..."}</p>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {socialMediaData.map(({ caption, src, views, likes, category }) => (
          <div
            key={caption}
            style={{ margin: "2px", padding: "2px", alignItems: "stretch" }}
          >
            <img src={src} alt="thumbnail-img" />
            <br />
            <b>{caption}</b>
            <br />
            <b>Likes: </b> {likes}
            <br />
            <b>Views: </b> {views}
          </div>
        ))}
      </div>
      <div>
        <button onClick={showBakery}>Show Bakery</button>
      </div>
    </div>
  );
}

export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/posts") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            posts: [
              {
                caption: "Delicious chocolate cake recipe",
                src: "https://picsum.photos/300/301",
                views: 1000,
                likes: 100,
                category: "Bakery",
              },
              {
                caption: "5-minute breakfast ideas",
                src: "https://picsum.photos/300/300",
                views: 500,
                likes: 50,
                category: "Food",
              },
              {
                caption: "The best bread recipe you'll ever taste",
                src: "https://picsum.photos/300/302",
                views: 2000,
                likes: 200,
                category: "Bakery",
              },
              {
                caption: "10 DIY home decor ideas",
                src: "https://picsum.photos/300/303",
                views: 100,
                likes: 10,
                category: "DIY",
              },
              {
                caption: "Healthy snacks for work",
                src: "https://picsum.photos/300/304",
                views: 300,
                likes: 30,
                category: "Food",
              },
              {
                caption: "How to make sourdough bread at home",
                src: "https://picsum.photos/300/305",
                views: 1500,
                likes: 150,
                category: "Bakery",
              },
            ],
          },
        });
      } else {
        reject({
          status: 404,
          message: "Post not found.",
        });
      }
    }, 2000);
  });
};
