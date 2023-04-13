import "./styles.css";
import { fakeFetch } from "./api/fakeFetch";
import { useEffect, useState } from "react";

export default function App() {
  const [commentsData, setCommentsData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const getCommentsData = async () => {
    setLoading(true);
    try {
      const { data, status } = await fakeFetch(
        "https://example.com/api/comments"
      );
      if (status === 200) {
        console.log(data.comments);
        setCommentsData(data.comments);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getCommentsData();
  }, []);

  const deleteComment = (name) => {
    const updatedComments = commentsData.filter(
      (comment) => comment.name !== name
    );
    setCommentsData(updatedComments);
  };

  function Comments({ data }) {
    return (
      <div>
        <h1>Comments</h1>
        <p>{isLoading && "Loading Comments.."}</p>
        {data.map(({ name, text }) => (
          <li>
            <b>{name}</b>
            <p>{text}</p>
            <button onClick={() => deleteComment(name)}>Delete</button> <br />
          </li>
        ))}
      </div>
    );
  }
  return (
    <div className="App">
      <Comments data={commentsData} />
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
