import "./styles.css";
import { fakeFetch } from "./api/fakefetch";
import { useState, useEffect } from "react";

export default function App() {
  const [chatData, setChatData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  async function getChatData() {
    setIsLoading(true);
    try {
      const { data, status } = await fakeFetch(
        "https://example.com/api/userchat"
      );
      if (status === 200) {
        setChatData(data);
      }
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getChatData();
  }, []);

  const deleteMessage = (name) => {
    const filterDeletedMessage = chatData.filter((chat) => chat.name !== name);
    setChatData(filterDeletedMessage);
  };
  const Chat = () => {
    if (isLoading) {
      return <h2>Loading Chats....</h2>;
    }
    return (
      <div>
        <h1>User Chat Component</h1>
        {chatData.map(({ name, messages }) => (
          <li>
            <b>{`${name}'s chat`}</b>{" "}
            <button onClick={() => deleteMessage(name)}>Delete</button>
            {messages.map(({ from, message }) => (
              <ul>
                {`${from}'s Message`} : {message}
              </ul>
            ))}
          </li>
        ))}
      </div>
    );
  };
  return (
    <div>
      <Chat />
    </div>
  );
}

export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/userchat") {
        resolve({
          status: 200,
          message: "Success",
          data: [
            {
              name: "Alia",
              messages: [
                {
                  from: "Alia",
                  message: "Good Morning",
                },
                {
                  from: "Ranvir",
                  message: "Good Morning, How are you?",
                },
              ],
            },
            {
              name: "Jeena",
              messages: [
                {
                  from: "Jeena",
                  message: "When is the meeting scheduled?",
                },
                {
                  from: "Seema",
                  message: "It is at 10AM tomorrow.",
                },
              ],
            },
            {
              name: "Abhay",
              messages: [
                {
                  from: "Abhay",
                  message: "Have you found a house yet?",
                },
                {
                  from: "John",
                  message: "No luck yet, still searching.",
                },
                {
                  from: "Abhay",
                  message:
                    "Hey, an apartment just got vacant in my bulding. Do you wanna have a look?",
                },
              ],
            },
          ],
        });
      } else {
        reject({
          status: 404,
          message: "users chat not found.",
        });
      }
    }, 2000);
  });
};
