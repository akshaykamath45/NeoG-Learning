import "./styles.css";
import { fakeFetch3 } from "./api/fakeFetch3";
import { useEffect, useState } from "react";
export default function App() {
  const [imageData, setImageData] = useState({});

  const getImageData = async () => {
    try {
      const { data, status } = await fakeFetch3("https://example.com/api/user");
      if (status === 200) {
        setImageData(data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getImageData();
  }, []);

  return (
    <div className="App">
      <h1>User Profile</h1>
      <img
        src={`${imageData.image}`}
        alt="fetched-data"
        height="500px"
        width="700px"
      ></img>
      <br />
      <b>
        Name : {imageData.name} <br />
        Likes : {imageData.likes}
        <br />
        Comments : {imageData.comments}
      </b>
    </div>
  );
}

export const fakeFetch3 = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/user") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            name: "Saroj",
            image:
              "https://cdn.pixabay.com/photo/2016/07/11/15/43/woman-1509956_1280.jpg",
            likes: 500,
            comments: 10,
          },
        });
      } else {
        reject({
          status: 404,
          message: "user data not found.",
        });
      }
    }, 2000);
  });
};
