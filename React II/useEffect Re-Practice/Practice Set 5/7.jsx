import "./styles.css";
import { fakeFetch } from "./api/fakefetch";
import { useState, useEffect } from "react";

export default function App() {
  const [commentData, setCommentData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getCommentsData = async () => {
    setIsLoading(true);
    try {
      const { data, status } = await fakeFetch(
        "https://example.com/api/comments"
      );
      if (status === 200) {
        setCommentData(data.comments);
      }
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getCommentsData();
  }, []);

  const Comments = () => {
    const deleteComment = (name) => {
      const deleteItem = commentData.filter((comment) => comment.name !== name);
      setCommentData(deleteItem);
    };
    return (
      <div>
        <h1>Comments</h1>
        {isLoading && <h3>Loading Data....</h3>}
        {commentData.map(({ name, text }) => (
          <div>
            <h4>{name}</h4>
            <p>{text}</p>
            <button onClick={() => deleteComment(name)}>Delete</button>
          </div>
        ))}
      </div>
    );
  };
  return (
    <div>
      <Comments />
    </div>
  );
}

export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/comments") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            comments: [
              {
                name: "Raju",
                text: "Hello how are you long time no see!!!",
              },
              { name: "Pankaj", text: "Party when??" },
              { name: "Sakshi", text: "Where are you currently staying" },
              { name: "Kishore", text: "Hello Buddy!!" },
            ],
          },
        });
      } else {
        reject({
          status: 404,
          message: "No comments Found",
        });
      }
    }, 2000);
  });
};
