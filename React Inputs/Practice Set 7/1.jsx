import { fakeFetch } from "./api/fakefetch";
import { useState, useEffect } from "react";

export default function App() {
  const [weatherData, setWeatherData] = useState({});
  const [isCelsius, setIsCelsius] = useState(true);
  const [isFahrenheit, setIsFahrenheit] = useState(false);
  const getWeatherData = async () => {
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
  };
  useEffect(() => {
    getWeatherData();
  }, []);

  const { temperature, humidity, windSpeed } = weatherData;
  const switchToFarenheit = () => {
    setWeatherData({ ...weatherData, temperature: 70 });
    setIsCelsius(false);
    setIsFahrenheit(true);
  };
  const switchToCelsius = () => {
    setWeatherData({ ...weatherData, temperature: 21 });
    setIsCelsius(true);
    setIsFahrenheit(false);
  };
  return (
    <div>
      <h1>Weather</h1>
      <p>
        Temperature: {temperature} {isCelsius ? " °C" : " °F"}
      </p>
      <p>Humidity: {humidity}%</p>
      <p>Wind Speed: {windSpeed} km/h</p>
      {isCelsius && (
        <button onClick={switchToFarenheit}>Switch to Fahrenheit</button>
      )}
      {isFahrenheit && (
        <button onClick={switchToCelsius}>Switch to Celsius</button>
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
