import React, { useState, useEffect } from "react";
import { fakeFetch } from "./fakefetch";

export const ChatRoom = () => {
  const [chatData, setChatData] = useState([]);

  const getChatData = async () => {
    try {
      const { data, status } = await fakeFetch(
        "https://example.com/api/userchats"
      );
      if (status === 200) {
        setChatData(data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getChatData();
  }, []);

  return (
    <div>
      <h1>Chat Room</h1>
      <ul>
        {chatData.map((message, index) => (
          <li
            key={index}
            style={{ listStyle: "none", display: "flex", marginLeft: "60px" }}
          >
            {index % 2 === 0 ? "user: " : "You: "}
            {message}
          </li>
        ))}
      </ul>
    </div>
  );
};
