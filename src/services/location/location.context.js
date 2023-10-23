import React, { useState } from "react";

import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = React.createContext();

export const LocationContextProvider = ({ children }) => {
  return <LocationContext.Provider>{children}</LocationContext.Provider>;
};
