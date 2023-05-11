import { useState } from "react";

export const Card = () => {
  const [borderRadius, setBorderRadius] = useState(0);
  return (
    <div>
      <div
        className="cardsContainer"
        style={{ borderRadius: `${borderRadius}px` }}
      >
        <h1>Card with Rounded Corners</h1>
        <div>
          <label>
            Border:{" "}
            <input
              type="range"
              value={borderRadius}
              onChange={(e) => setBorderRadius(e.target.value)}
            />
          </label>
        </div>
      </div>
    </div>
  );
};
