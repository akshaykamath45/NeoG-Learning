import React from "react";
import { Link } from "react-router-dom";
import phonesDB from "./phonesDB";

export default function Category() {
  return (
    <>
      <h1> iPhones </h1>
      <ul>
        {phonesDB.data.map(({ id, name, price, memory, currency }) => (
          <li
            style={{
              padding: "1rem",
              listStyle: "none",
              margin: "1rem",
              border: "1px solid #efefef"
            }}
          >
            <div style={{ fontSize: "large" }}>
              {name} {memory} GB
            </div>
            <div>
              Price: {price} {currency}
            </div>
            <Link to={`/product/${id}`}> View Details </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
