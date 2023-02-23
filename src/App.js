import React, { useReducer } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Admin from "./pages/admin";
import { GuestContext } from "./context/guestContext";

function App() {
  const guestReducer = (state, action) => {
    switch (action.type) {
      case "SET_GUEST":
        return {
          ...state,
          guest: action.payload,
        };
      default:
        throw new Error("No action");
    }
  };

  const [state, dispatch] = useReducer(guestReducer, {
    guest: [],
    guestList: [],
  });

  return (
    <GuestContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </GuestContext.Provider>
  );
}

export default App;
