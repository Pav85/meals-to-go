import React, { useState, useEffect } from "react";

import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = React.createContext();

export const LocationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState(null);
  const [keyword, setKeyword] = useState("san francisco");

  const onSearch = (searchKeyword = "Antwerp") => {
    console.log(searchKeyword.toLocaleLowerCase());
    setIsLoading(true);
    setKeyword(searchKeyword.toLowerCase());
    locationRequest(searchKeyword.toLocaleLowerCase())
      .then(locationTransform)
      .then((result) => {
        setIsLoading(false);
        setLocation(result);
        console.log(result);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };
  useEffect(() => {
    onSearch();
  }, []);

  return (
    <LocationContext.Provider
      value={{ isLoading, error, location, search: () => null, keyword }}
    >
      {children}
    </LocationContext.Provider>
  );
};
