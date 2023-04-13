import "./styles.css";
import { fakeFetch } from "./api/fakefetch";
import { useState, useEffect } from "react";

export default function App() {
  const [toDoItems, setToDoItems] = useState([]);
  async function getToDoData() {
    try {
      const { data, status } = await fakeFetch("https://example.com/api/todos");
      if (status === 200) {
        setToDoItems(data.todos);
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getToDoData();
  }, []);

  return (
    <div className="App">
      <h1>To Do Items</h1>

      {toDoItems.map(({ title, desc, todos }) => (
        <li style={{ listStyle: "none" }}>
          <h1>
            {title}: {desc}
          </h1>
          <ol>
            {todos.map((ele) => (
              <li>{ele}</li>
            ))}
          </ol>
          <hr />
        </li>
      ))}
    </div>
  );
}

export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/todos") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            todos: [
              {
                title: "Go Outside",
                desc: "Get some fresh air",
                todos: ["shopping", "cricket", "walking"],
              },
              {
                title: "Let's Work",
                desc: "Deadline closes in 3 Days",
                todos: ["Feature update", "Team Meet", "Code Walkthrough"],
              },
              {
                title: "Home Work",
                desc: "To be done on priority",
                todos: ["Fix tap", "Wedding function"],
              },
            ],
          },
        });
      } else {
        reject({
          status: 404,
          message: "Todo list not found.",
        });
      }
    }, 2000);
  });
};
