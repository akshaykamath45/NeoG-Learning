import "./styles.css";
import { fakeFetch } from "./api/fakefetch";
import { useState, useEffect } from "react";

export default function App() {
  const [userFeedData, setUserFeedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  async function getUserFeedData() {
    setIsLoading(true);
    try {
      const { data, status } = await fakeFetch("https://example.com/api/users");
      if (status === 200) {
        setUserFeedData(data);
      }
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setIsError(true);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getUserFeedData();
  }, []);

  const UserFeedData = () => {
    if (isLoading) {
      return (
        <div>
          <h1>Fetching User Data ....</h1>
        </div>
      );
    }
    if (isError) {
      return (
        <div>
          <h1>Sorry,Data Not Found :)</h1>
        </div>
      );
    }

    return (
      <div>
        <h1>Users Feed</h1>
        {userFeedData.map(({ name, image, likes, comments }) => (
          <div>
            <img
              src={image}
              alt="user=feed-img"
              style={{ width: "200px", height: "200px" }}
            ></img>
            <br />
            <b>{name}</b>
            <br />
            Likes: {likes} <br />
            Comments: {comments} <br />
          </div>
        ))}
      </div>
    );
  };
  return (
    <div>
      <UserFeedData />
    </div>
  );
}

export const fakeFetch = (url) => {
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
