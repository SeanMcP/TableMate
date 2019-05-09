import React from "react";
import { initialState, reducer } from "./RoomReducer";
import { addRoom, removeRoom } from "./RoomActions";

const RoomContext = React.createContext();

export function RoomProvider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <RoomContext.Provider value={{ state, dispatch }}>
      {children}
    </RoomContext.Provider>
  );
}

export function useRoomContext() {
  const context = React.useContext(RoomContext);
  if (!context) {
    throw Error(
      "Uh oh! Did you forget call useRoomContext within the RoomProvider?"
    );
  }
  const { state, dispatch } = context;
  const actions = {
    addRoom: addRoom(dispatch),
    removeRoom: removeRoom(dispatch)
  };
  return [state, actions];
}
