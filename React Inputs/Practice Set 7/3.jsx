import { fakeFetch } from "./api/fakefetch";
import { useState, useEffect } from "react";

export default function App() {
  const [userData, setUserData] = useState({});
  const [showAddress, setShowAddress] = useState(false);
  const [hideAddress, setHideAddress] = useState(false);
  const [showAddressButton, setShowAddressButton] = useState(true);
  const [hideAddressButton, setHideAddressButton] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const getUserData = async () => {
    setIsLoading(true);
    try {
      const { data, status } = await fakeFetch("https://example.com/api/user");
      if (status === 200) {
        setUserData(data);
      }
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };
  const { name, email, phone, address } = userData;
  useEffect(() => {
    getUserData();
  }, []);

  const displayAddress = () => {
    setShowAddress(true);
    setHideAddress(true);
    setShowAddressButton(false);
    setHideAddressButton(true);
  };
  const removeAddress = () => {
    setShowAddress(false);
    setHideAddress(true);
    setShowAddressButton(true);
    setHideAddressButton(false);
    return <div></div>;
  };
  if (isLoading) {
    return <div>Loading Data...</div>;
  }
  return (
    <div>
      <h1>User</h1>
      <br />
      Name: {name} <br />
      Email: {email} <br />
      Phone: {phone}
      <br />
      {showAddressButton && (
        <button onClick={displayAddress}>Show Address</button>
      )}
      {hideAddress && hideAddressButton && (
        <button onClick={removeAddress}>Hide Address</button>
      )}
      {showAddress && (
        <div>
          <br />
          {address.street} <br />
          {address.suite}
          <br />
          {address.city}
          <br />
          {address.zipcode}
          <br />
        </div>
      )}
      <div></div>
    </div>
  );
}

export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/user") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            name: "John Doe",
            email: "john.doe@example.com",
            phone: "+1 555-555-5555",
            address: {
              street: "123 Main St",
              suite: "Suite 456",
              city: "Anytown",
              zipcode: "12345",
            },
          },
        });
      } else {
        reject({
          status: 404,
          message: "User not found.",
        });
      }
    }, 2000);
  });
};
