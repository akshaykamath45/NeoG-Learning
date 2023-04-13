import "./styles.css";
import { useEffect, useState } from "react";
import { fakeFetch } from "./api/fakefetch";
export default function App() {
  const [chatData, setChatData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getChatData = async () => {
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
  };
  useEffect(() => {
    getChatData();
  }, []);

  return (
    <div className="App">
      <div className="App">
        <p>{isLoading && "Loading Chats ..."}</p>
        <ul>
          {chatData.map(({ name, messages }) => (
            <li>
              <h1>{`${name}'s Chat`}</h1>

              {messages.map(({ from, message }) => (
                <ul>
                  <li
                    style={{
                      listStyleType: "circle",
                      paddingLeft: "20px",
                      fontSize: "14px",
                      paddingTop: "10px",
                    }}
                  >
                    <b>{from}</b> : {message}
                  </li>
                </ul>
              ))}
            </li>
          ))}
        </ul>
      </div>
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
