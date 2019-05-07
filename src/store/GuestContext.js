import React from "react";
import { initialState, reducer } from "./GuestReducer";
import { addGuest, removeGuest } from "./GuestActions";

const GuestContext = React.createContext();

export function GuestProvider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <GuestContext.Provider value={{ state, dispatch }}>
      {children}
    </GuestContext.Provider>
  );
}

export function useGuestContext() {
  const context = React.useContext(GuestContext);
  if (!context) {
    throw Error(
      "Uh oh! Did you forget call useGuestContext within the GuestProvider?"
    );
  }
  const { state, dispatch } = context;
  const actions = {
    addGuest: addGuest(dispatch),
    removeGuest: removeGuest(dispatch)
  };
  return [state, actions];
}
