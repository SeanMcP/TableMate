import { STORE_ACTION_TYPES } from "./StoreActions";

export const initialState = {
  guestsByRoom: {
    "The Veranda": [],
    "The Overlook": [],
    NONE: [],
    Poolside: []
  }
};

export function reducer(state, action) {
  switch (action.type) {
    case STORE_ACTION_TYPES.ADD_NEW_GUEST: {
      const { name, room = "NONE" } = action;
      const guestsByRoom = { ...state.guestsByRoom };
      guestsByRoom[room].push(name);
      return {
        ...state,
        guestsByRoom
      };
    }
    case STORE_ACTION_TYPES.ADD_NEW_ROOM: {
      const { name } = action;
      const guestsByRoom = { ...state.guestsByRoom };
      guestsByRoom[name] = [];
      return {
        ...state,
        guestsByRoom
      };
    }
    case STORE_ACTION_TYPES.MOVE_GUEST: {
      const { source, sourceIndex, destination, destinationIndex } = action;
      const guestsByRoom = { ...state.guestsByRoom };
      const name = guestsByRoom[source].splice(sourceIndex, 1)[0];
      guestsByRoom[destination].splice(destinationIndex, 0, name);
      return {
        ...state,
        guestsByRoom
      };
    }
    case STORE_ACTION_TYPES.REMOVE_GUEST: {
      const { name, room } = action;
      const guestsByRoom = { ...state.guestsByRoom };
      guestsByRoom[room] = guestsByRoom[room].filter(item => item !== name);
      return {
        ...state,
        guestsByRoom
      };
    }
    case STORE_ACTION_TYPES.REORDER_GUEST: {
      const { source, sourceIndex, destinationIndex } = action;
      const guestsByRoom = { ...state.guestsByRoom };
      const name = guestsByRoom[source].splice(sourceIndex, 1)[0];
      guestsByRoom[source].splice(destinationIndex, 0, name);
      return {
        ...state,
        guestsByRoom
      };
    }
    default: {
      return state;
    }
  }
}
