import "./styles.css";
import { fakeFetch } from "./api/fakefetch";
import { useState, useEffect } from "react";

export default function App() {
  const [users, setUsers] = useState([]);
  const [userInput, setUserInput] = useState("");

  const getUserData = async () => {
    try {
      const { data, status } = await fakeFetch("https://example.com/api/users");
      if (status === 200) {
        setUsers(data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  const handleInput = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <div>
      <h1>Users</h1>
      Filter by Year:
      <select onChange={handleInput}>
        <option value="">All Companies</option>
        <option value="XYZ Corp">XYZ Corp</option>
        <option value="ABC Inc">ABC Inc</option>
        <option value="ACME Corp">ACME Corp</option>
      </select>
      {users &&
        users
          .filter((user) => {
            if (userInput === "") {
              return true;
            } else {
              return user.company.toString() === userInput;
            }
          })
          .map(({ name, email, website, company }) => (
            <li key={name}>
              <p>{name}</p>
              <p>{email}</p>
              <p>{website}</p>
              <p>{company}</p>
            </li>
          ))}
    </div>
  );
}

export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === 'https://example.com/api/users') {
        resolve({
          status: 200,
          message: 'Success',
          data: [
            {
              name: 'John Doe',
              email: 'john@example.com',
              website: 'example.com',
              company: 'ABC Inc',
            },
            {
              name: 'Jane Doe',
              email: 'jane@example.com',
              website: 'example.com',
              company: 'XYZ Corp',
            },
            {
              name: 'Bob Smith',
              email: 'bob@example.com',
              website: 'example.com',
              company: 'ABC Inc',
            },
            {
              name: 'Alice Brown',
              email: 'alice@example.com',
              website: 'example.com',
              company: 'ACME Corp',
            },
            {
              name: 'Charlie Green',
              email: 'charlie@example.com',
              website: 'example.com',
              company: 'XYZ Corp',
            },
          ],
        })
      } else {
        reject({
          status: 404,
          message: 'Users list not found.',
        })
      }
    }, 2000)
  })
}