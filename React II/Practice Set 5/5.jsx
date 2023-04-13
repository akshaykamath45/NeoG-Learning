import "./styles.css";
import { fakeFetch4 } from "./api/fakeFetch4";
import { useEffect, useState } from "react";
export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [showImageContent, setImageContent] = useState([]);

  async function getImageContentData() {
    setIsLoading(true);
    try {
      const { data, status } = await fakeFetch4(
        "https://example.com/api/users"
      );
      if (status === 200) {
        setImageContent(data);
      }
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setIsError(true);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getImageContentData();
  }, []);

  return (
    <div className="App">
      <h1>Users Feed</h1>

      <p>{isLoading && "Loading.."}</p>
      <p>{isError && "Error"}</p>
      <ul>
        {showImageContent.map(({ name, likes, comments, image }) => (
          <li style={{ listStyle: "none" }}>
            <img
              src={`${image}`}
              alt="fetched-data"
              height="500px"
              width="700px"
            ></img>
            <br />
            <h2>{name}</h2>
            <b>
              <p>Likes: {likes}</p>
              <p>Comments: {comments}</p>
            </b>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const fakeFetch4 = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/users") {
        resolve({
          status: 200,
          message: "Success",
          data: [
            {
              name: "Saroj",
              image:
                "https://cdn.pixabay.com/photo/2017/06/13/13/06/girl-2398822_1280.jpg",
              likes: 500,
              comments: 10,
            },
            {
              name: "Meeta",
              image:
                "https://cdn.pixabay.com/photo/2017/06/13/13/06/girl-2398822_1280.jpg",
              likes: 200,
              comments: 1,
            },
            {
              name: "Alia",
              image:
                "https://cdn.pixabay.com/photo/2017/06/13/13/06/girl-2398822_1280.jpg",
              likes: 100,
              comments: 5,
            },
          ],
        });
      } else {
        reject({
          status: 404,
          message: "users data not found.",
        });
      }
    }, 2000);
  });
};
