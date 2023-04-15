import "./styles.css";
import { fakeFetch } from "./api/fakefetch";
import { useState, useEffect } from "react";

export default function App() {
  const [habitData, setHabitData] = useState([]);
  const [archivedData, setArchivedData] = useState([]);
  const [isHeading, setIsHeading] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  async function getHabitTrackerData() {
    setIsLoading(true);
    try {
      const { data, status, message } = await fakeFetch(
        "https://example.com/api/habits"
      );
      if (status === 200 && message === "Success") {
        setHabitData(data.habits);
      }
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getHabitTrackerData();
  }, []);

  const showArchivesData = () => {
    const archivedData = habitData.filter(({ archived }) => archived);
    setArchivedData(archivedData);
    setHabitData(archivedData);
    setIsHeading(false);
  };
  return (
    <div>
      <h1>{isHeading && "Unarchived"}</h1>
      <p>{isLoading && "Loading Data..."}</p>
      <h1>{!isHeading && "Archived"}</h1>
      <ul>
        {habitData
          .filter(({ archived }) => !archived)
          .map(({ title, desc, daysFollowed, daysSkipped, archived }) => (
            <li>
              <h3>{title}</h3>
              <p>{desc}</p>
              <br />
              <b>Days Followed: </b>
              {daysFollowed}
              <br />
              <br />
              <b>Days Skipped: </b>
              {daysSkipped}
              <hr />
            </li>
          ))}
      </ul>
      <button onClick={showArchivesData}>Show Archives</button>
      <ul>
        {archivedData.map(
          ({ title, desc, daysFollowed, daysSkipped, archived }) => (
            <li>
              <h3>{title}</h3>
              <p>{desc}</p>
              <br />
              <b>Days Followed: </b>
              {daysFollowed}
              <br />
              <br />
              <b>Days Skipped: </b>
              {daysSkipped}
              <hr />
            </li>
          )
        )}
      </ul>
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
                archived: false,
              },
              {
                title: "Exercise",
                desc: "Track your workouts and aim to exercise a certain number of days per week",
                daysFollowed: 10,
                daysSkipped: 4,
                archived: true,
              },
              {
                title: "Meditation",
                desc: "Track your daily meditation practice and try to increase the length of your sessions over time",
                daysFollowed: 30,
                daysSkipped: 7,
                archived: true,
              },
              {
                title: "Gratitude",
                desc: "Write down something you are grateful for each day",
                daysFollowed: 11,
                daysSkipped: 5,
                archived: false,
              },
              {
                title: "Saving Money",
                desc: "Track your expenses and set a goal to save a certain amount of money each month",
                daysFollowed: 40,
                daysSkipped: 15,
                archived: false,
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
