import React, { useContext, useState } from "react";
import Fetch from "./fetch";

const AppContext = React.createContext();

/* plz subsribe to thapa technical channel 
          https://www.youtube.com/thapatechnical
         */

// we are getting the children and that is app component in our case
const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("hacker");
  const { isLoading, isError, movie } = Fetch(`&s=${query}`);

  return (
    <AppContext.Provider value={{ query, movie, setQuery, isLoading, isError }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };