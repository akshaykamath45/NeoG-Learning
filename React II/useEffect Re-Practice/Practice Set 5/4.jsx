import "./styles.css";
import { fakeFetch } from "./api/fakefetch";
import { useState, useEffect } from "react";
export default function App() {
  const [userData, setUserData] = useState({});

  const getUserData = async () => {
    try {
      const { status, data } = await fakeFetch("https://example.com/api/user");
      if (status === 200) {
        setUserData(data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(()=>{
    getUserData();
  },[])

  const {image,name,likes,comments}=userData//Can use De-Structuring Also

  const UserProfile=({width,height})=>{
    return (
      <div>
      <h1>User Profile</h1>
    
      <img src={userData.image} alt="user-img" style={{width:`${width}`,height:`${height}`}}></img> <br/>
      <h2>Name:{userData.name}<br/>
      Likes: {userData.likes}<br/>
      Comments: {userData.comments}<br/></h2>
  
      </div>
    );
  }

  const width="500px";
  const height="400px";

  return (
    <div>
    <UserProfile width={width} height={height}/>
    </div>
  );
}