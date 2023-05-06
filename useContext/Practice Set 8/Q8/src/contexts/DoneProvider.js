import { createContext } from "react";
import { useState } from "react";
export const DoneContext = createContext();

export const DoneProvider = ({ children }) => {
  const [done, setDone] = useState([]);

  const handleDoneItems = (items) => {
    setDone((done) => [...done, items]);
  };
  return (
    <DoneContext.Provider value={{ done, handleDoneItems }}>
      {children}
    </DoneContext.Provider>
  );
};
