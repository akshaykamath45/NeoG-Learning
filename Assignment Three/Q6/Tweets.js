import React, { useState, useEffect } from "react";
import { fakeFetch } from "./fakeFetch";

export const Tweets = () => {
  const [tweets, setTweets] = useState([]);
  const [showAllTweets, setShowAllTweets] = useState(true);

  const getTweetsData = async () => {
    try {
      const { data, status } = await fakeFetch(
        "https://example.com/api/usertweets"
      );
      if (status === 200) {
        setTweets(data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getTweetsData();
  }, []);

  const toggleTweets = () => {
    setShowAllTweets((previousShowAllTweets) => !previousShowAllTweets);
  };

  const filteredTweets = showAllTweets
    ? tweets
    : tweets.filter((tweet) => tweet.likes > 50);

  return (
    <div>
      <button onClick={toggleTweets}>
        {showAllTweets
          ? "Show Tweets with More than 50 Likes"
          : "Show All Tweets"}
      </button>
      {filteredTweets.map(({ id, content, likes, views }) => (
        <div
          key={id}
          style={{ border: "1px solid rgb(88, 188, 251)", margin: "10px" }}
        >
          <h2>{content}</h2>
          <p>
            Likes: {likes} Views: {views}
          </p>
        </div>
      ))}
    </div>
  );
};
