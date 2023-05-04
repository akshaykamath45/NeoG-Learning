import React from "react";
import { useParams } from "react-router";
import phonesDB from "./phonesDB";
export default function ProductDetail() {
  const { productID } = useParams();
  console.log(productID);
  const phoneData = phonesDB.data.find((product) => product.id === productID);

  return (
    <div>
      {/* <h1> Clicked {productID}</h1> */}

      <ul>
        {
          <div>
            <h2>{phoneData.name}</h2>
            <p>Storage: {phoneData.memory}</p>
            <p>
              Price: {phoneData.currency} {phoneData.price}
            </p>
            <p>Details: {phoneData.details}</p>
          </div>
        }
      </ul>
    </div>
  );
}
