import "./styles.css";
import { fakeFetch } from "./api/fakefetch";
import { useState, useEffect } from "react";

export default function App() {
  const [userInformation, setUserInformation] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const getUserData = async () => {
    setIsLoading(true);
    try {
      const { data, status } = await fakeFetch(
        "https://example.com/api/profile"
      );
      if (status === 200) {
        setUserInformation(data.profiles);
      }
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setIsError(true);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getUserData();
  }, []);
  const UserProfile = () => {
    const { age, name, gender, email, occupation } = userInformation;

    const updateDetails = () => {
      const updatedUserInformation = {
        ...userInformation,
        name: "Emily",
        age: 25,
        gender: "Female",
        email: "emily@example.com",
        occupation: "UI Engineer",
      };
      setUserInformation(updatedUserInformation);
    };
    if (isLoading) {
      return <h1>Loading Data....</h1>;
    }
    if (isError) {
      return (
        <div>
          <h1>404</h1> <br />
          <p>User Profile Not Found.</p>
        </div>
      );
    }
    return (
      <div>
        <h1>User Profile</h1>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Gender: {gender}</p>
        <p>Email: {email}</p>
        <p>Occupation: {occupation}</p>
        <button onClick={updateDetails}>Update Details</button>
      </div>
    );
  };
  return (
    <div>
      <UserProfile />
    </div>
  );
}

export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/profile") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            profiles: {
              name: "John",
              age: 30,
              gender: "male",
              email: "john@example.com",
              occupation: "Software Engineer",
            },
          },
        });
      } else {
        reject({
          status: 404,
          message: "User Profile not found.",
        });
      }
    }, 2000);
  });
};
