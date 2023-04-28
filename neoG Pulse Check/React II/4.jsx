import "./styles.css";
import { fakeFetch } from "./api/fakefetch";
import { useState, useEffect } from "react";

export default function App() {
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  async function getUserData() {
    setIsLoading(true);
    try {
      const { data, status } = await fakeFetch("https://example.com/api/users");
      if (status === 200) {
        setUserData(data);
      }
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setIsError(true);
      setIsLoading(false);
    }
  }
  useEffect(() => {
    getUserData();
  }, []);
  const handleLike = (index) => {
    const updatedUserData = [...userData];
    updatedUserData[index].likes++;
    setUserData(updatedUserData);
  };
  const UserData = () => {
    return (
      <div>
        <h1>User Feed</h1>
        {isLoading && <h2>Loading Data....</h2>}
        {isError && (
          <div>
            <h2>404</h2> <p>Users Data Not Found</p>
          </div>
        )}
        {userData.map(({ name, image, likes, comments }, index) => (
          <div key={index}>
            <img
              src={image}
              alt="user=img"
              style={{ width: "200px", height: "200px" }}
            ></img>
            <p>Name: {name}</p>
            <p>Likes: {likes}</p>
            <p>Comments: {comments}</p>
            <button onClick={() => handleLike(index)}>Like {name}</button>{" "}
            <br />
          </div>
        ))}
      </div>
    );
  };
  return (
    <div>
      <UserData />
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
