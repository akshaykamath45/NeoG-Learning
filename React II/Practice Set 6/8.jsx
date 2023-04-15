import { fakeFetch } from "./api/fakefetch";
import { useState, useEffect } from "react";

export default function App() {
  const [profile, setProfile] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  async function getProfileData() {
    setIsLoading(true);
    try {
      const { data, status, message } = await fakeFetch(
        "https://example.com/api/profile"
      );
      if (status === 200 && message === "Success") {
        setProfile(data.profiles);
      }
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getProfileData();
  }, []);

  const changeName = () => {
    const newObj = { ...profile, name: "Emily" };
    setProfile(newObj);
  };
  // const {name,email,age,gender,occupation}=profile -->We can destructure it like this
  return (
    <div>
      <h1>Profiles</h1>
      <p>{isLoading && "Loading Profile Details..."}</p>
      <div>
        <b>Name: </b>
        {profile.name}
        <br />
        <b>Email: </b>
        {profile.email}
        <br />
        <b>Age: </b>
        {profile.age}
        <br />
        <b>Gender: </b>
        {profile.gender}
        <br />
        <b>Occupation: </b>
        {profile.occupation}
        <br />
      </div>
      <button onClick={changeName}>Update name</button>
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
