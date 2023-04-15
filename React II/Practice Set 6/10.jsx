import "./styles.css";
import { fakeFetch } from "./api/fakefetch";
import { useState, useEffect } from "react";

export default function App() {
  const [profileData, setProfileData] = useState({});
  const [isDisable, setIsDisable] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const getSocialMediaProfileData = async () => {
    setIsLoading(true);
    try {
      const { data, status, message } = await fakeFetch(
        "https://example.com/api/profile"
      );
      if (status === 200 && message === "Success") {
        setProfileData(data.profile);
      }
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    getSocialMediaProfileData();
  }, []);
  const increaseFollowers = () => {
    const updatedObj = { ...profileData, followers: followers + 1 };
    setProfileData(updatedObj);
    setIsDisable(true);
  };
  const { name, age, gender, email, occupation, followers, followedBy } =
    profileData;
  if (isLoading) {
    return (
      <div>
        <h1>Loading Profile Data...</h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1>{name}</h1>
        <b>Age: </b>
        {age}
        <br />
        <b>Gender: </b>
        {gender}
        <br />
        <b>Email: </b>
        {email}
        <br />
        <b>Occupation: </b>
        {occupation}
        <br />
        <b>Followers: </b>
        {followers}
        <br />
        <b>Followed By: </b>
        {followedBy}
        <br />
        <button onClick={increaseFollowers} disabled={isDisable}>
          {" "}
          Follow John
        </button>
      </div>
    );
  }
}

export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/profile") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            profile: {
              name: "John",
              age: 30,
              gender: "male",
              email: "john@example.com",
              occupation: "Software Engineer",
              followers: 450,
              followedBy: 400,
            },
          },
        });
      } else {
        reject({
          status: 404,
          message: "Profile not found.",
        });
      }
    }, 2000);
  });
};
