import "./styles.css";
import { fakeFetch } from "./api/fakefetch";
import { useState, useEffect } from "react";

export default function App() {
  const [weatherData, setWeatherData] = useState({});
  const [isCelsius, setIsCelcius] = useState(true);
  const [isFarenheit, setIsFarenheit] = useState(false);
  async function getWeatherData() {
    try {
      const { data, status } = await fakeFetch(
        "https://example.com/api/weather"
      );
      if (status === 200) {
        setWeatherData(data);
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getWeatherData();
  }, []);

  const { temperature, humidity, windSpeed } = weatherData;

  const switchToFarenheit = () => {
    setIsCelcius(false);
    const updatedTemperature = { ...weatherData, temperature: 70 };
    setWeatherData(updatedTemperature);
    setIsFarenheit(true);
  };

  const switchToCelcius = () => {
    setIsFarenheit(false);
    const updatedTemperature = { ...weatherData, temperature: 21 };
    setWeatherData(updatedTemperature);
    setIsCelcius(true);
  };
  return (
    <div>
      <h1>Weather</h1>
      <p>
        Temperature: {temperature}
        {isCelsius ? "°C" : "°F"}
      </p>
      <p>Humidity: {humidity} %</p>
      <p>Wind Speed: {windSpeed} km/h</p>
      {isCelsius && (
        <button onClick={switchToFarenheit}>Switch to Fahrenheit</button>
      )}
      {isFarenheit && (
        <button onClick={switchToCelcius}>Switch to Celcius</button>
      )}
    </div>
  );
}

export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/weather") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            temperature: 21,
            humidity: 50,
            windSpeed: 10,
          },
        });
      } else {
        reject({
          status: 404,
          message: "Weather data not found.",
        });
      }
    }, 2000);
  });
};
