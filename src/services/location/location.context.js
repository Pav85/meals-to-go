import React, { useState } from "react";

import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = React.createContext();

export const LocationContextProvider = ({ children }) => {
  return (
    <LocationContext.Provider
      value={{ isLoading, error, location, search: () => null, keyword }}
    >
      {children}
    </LocationContext.Provider>
  );
};
