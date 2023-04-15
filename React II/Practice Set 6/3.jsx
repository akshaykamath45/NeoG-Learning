import "./styles.css";
import { fakeFetch } from "./api/fakefetch";
import { useState, useEffect } from "react";

export default function App() {
  const [habitData, setHabitData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const getHabitTrackerData = async () => {
    setIsLoading(true);
    try {
      const { data, status } = await fakeFetch("https://example.com/api/habit");
      if (status === 200) {
        setHabitData(data.habits);
      }
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setIsError(true);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getHabitTrackerData();
  }, []);

  return (
    <div>
      <h1>Habit Tracker</h1>
      <p>{isLoading && <b>Loading Habit Tracker...</b>}</p>
      <p>
        {isError && <b>Not able to fetch the data.Please enter valid URL.</b>}
      </p>
      {habitData.map(({ title, desc, daysFollowed, daysSkipped }) => (
        <li>
          <h1>{title}</h1>
          <p>{desc}</p>
          <br />
          <b>Days Followed: </b> {daysFollowed}
          <br />
          <b>Days Skipped: </b> {daysSkipped}
          <hr />
        </li>
      ))}
    </div>
  );
}

export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/habits") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            habits: [
              {
                title: "Drinking enough water",
                desc: "Aim to drink 5-6L of water each day to stay hydrated",
                daysFollowed: 7,
                daysSkipped: 3,
              },
              {
                title: "Exercise",
                desc: "Track your workouts and aim to exercise a certain number of days per week",
                daysFollowed: 10,
                daysSkipped: 4,
              },
              {
                title: "Meditation",
                desc: "Track your daily meditation practice and try to increase the length of your sessions over time",
                daysFollowed: 30,
                daysSkipped: 7,
              },
              {
                title: "Gratitude",
                desc: "Write down something you are grateful for each day",
                daysFollowed: 11,
                daysSkipped: 5,
              },
              {
                title: "Saving Money",
                desc: "Track your expenses and set a goal to save a certain amount of money each month",
                daysFollowed: 40,
                daysSkipped: 15,
              },
            ],
          },
        });
      } else {
        reject({
          status: 404,
          message: "Habits not found.",
        });
      }
    }, 2000);
  });
};
