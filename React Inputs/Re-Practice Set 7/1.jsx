import "./styles.css";
import { fakeFetch } from "./api/fakefetch";
import { useState, useEffect } from "react";

export default function App() {
  const [weatherData, setWeatherData] = useState({});
  const [isCelsius, setIsCelsius] = useState(false);
  const [isFarheneit, setIsFarhenit] = useState(true);
  const getData = async () => {
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
    getData();
  }, []);

  const switchToCelsius = () => {
    const updateToCelsius = { ...weatherData, temperature: 21 };
    setWeatherData(updateToCelsius);
    setIsFarhenit(true);
    setIsCelsius(false);
  };

  const switchToFarehneit = () => {
    const updateToFarehneit = { ...weatherData, temperature: 70 };
    setWeatherData(updateToFarehneit);
    setIsCelsius(true);
    setIsFarhenit(false);
  };
  return (
    <div>
      <h1>Weather</h1>
      <p>
        Temperature: {weatherData.temperature}°{isCelsius && <>F</>}{" "}
        {isFarheneit && <>C</>}
      </p>
      <p>Humidity: {weatherData.humidity}%</p>
      <p>Wind Speed: {weatherData.windSpeed} km/h</p>
      {isFarheneit && (
        <button onClick={switchToFarehneit}>Switch to Fahrenheit</button>
      )}
      {isCelsius && (
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
