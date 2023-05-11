import { useState } from "react";
const cityData = [
  {
    id: "1",
    city: "London",
    description: "London is the capital of the United Kingdom",
  },
  {
    id: "2",
    city: "Paris",
    description: "Paris is the capital of France",
  },
  {
    id: "3",
    city: "Tokyo",
    description: "Tokyo is the capital of Japan",
  },
  {
    id: "4",
    city: "New York",
    description: "New York is the capital of the United States",
  },
];

export const Tabs = () => {
  const [currentCity, setCurrentCity] = useState([]);
  return (
    <div>
      <h1>Tabs</h1>
      <div className="tabsContainer">
        <div className="tabsContainer-list">
          {cityData.map((tab) => (
            <span key={tab.id} onClick={() => setCurrentCity(tab)}>
              {tab.city}
            </span>
          ))}
        </div>
        {currentCity && (
          <div className="tabsContainer-description">
            <h2>{currentCity.city}</h2>
            <p>{currentCity.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};
