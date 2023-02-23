import React, { createContext, useContext } from "react";

const GuestContext = createContext([]);
const useGuest = () => useContext(GuestContext);

export { GuestContext, useGuest }