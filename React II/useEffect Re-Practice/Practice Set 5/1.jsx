import "./styles.css";
import { fakeFetch } from "./api/fakefetch";
import { useState, useEffect } from "react";

export default function App() {
  const [userData, setUserData] = useState([]);

  async function getUserData() {
    try {
      const { data, status } = await fakeFetch(
        "https://example.com/api/users/status"
      );
      if (status === 200) {
        setUserData(data.users);
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getUserData();
  }, []);
  
  return (
    <div>
      <h1>Online Users</h1>
      {userData.map(({ name, status }) => (
        <div style={{ color: status === "Online" ? "green" : "red" }}>
          {name} - {status}
        </div>
      ))}
    </div>
  );
}

export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/users/status") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            users: [
              { name: "Raju", status: "Online" },
              { name: "Pankaj", status: "Offline" },
              { name: "Sakshi", status: "Offline" },
              { name: "Kishore", status: "Offline" },
            ],
          },
        });
      } else {
        reject({
          status: 404,
          message: "No users Found",
        });
      }
    }, 2000);
  });
};
