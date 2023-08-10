import { createContext, useState, useEffect } from "react";
import { fakeFetch } from "../data/fakeFetch";

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [menu, setMenu] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getData = async () => {
    setIsLoading(true);
    try {
      const { data, status } = await fakeFetch("https://example.com/api/menu");
      if (status === 200) {
        setMenu(data.menu);
      }
      setIsLoading(false);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <MenuContext.Provider value={{ menu, setMenu, isLoading }}>
      {children}
    </MenuContext.Provider>
  );
};
