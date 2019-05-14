import React from "react";
import { initialState, reducer } from "./StoreReducer";
import { addNewGuest, addNewRoom, moveGuest } from "./StoreActions";

const StoreContext = React.createContext();

export function StoreProvider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = React.useContext(StoreContext);
  if (!context) {
    throw Error(
      "Uh oh! Did you forget call useStore within the StoreProvider?"
    );
  }
  const { state, dispatch } = context;
  const actions = {
    addNewGuest: addNewGuest(dispatch),
    addNewRoom: addNewRoom(dispatch),
    moveGuest: moveGuest(dispatch),
  };
  return [state, actions];
}
