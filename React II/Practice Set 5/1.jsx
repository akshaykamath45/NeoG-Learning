import "./styles.css";
import { fakeFetch1 } from "./api/fakefetch";
import { useState,useEffect} from "react";
export default function App() {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const { data, status } = await fakeFetch1(
        "https://example.com/api/users/status"
      );
      if (status === 200) {
        console.log({ data: data.users });
        setData(data.users);
      }
    } catch (e) {
      console.log(e);
    }
  };

  // useEffect(()=>{
  //   getData();
  // },[])

  return (
    <div className="App">
      <h1>Online Users</h1>
      <button onClick={getData}>Show users</button>
      <ul>
        {data.map(({ name, status }) => (
          <li style={{ listStyle: "none" }}>
            <p style={{ color: status === "Online" ? "green" : "red" }}>
              {name} - {status}
            </p>
          </li>
        ))}
      </ul>
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
