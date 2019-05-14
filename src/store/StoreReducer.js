import { STORE_ACTION_TYPES } from "./StoreActions";

export const initialState = {
  guestsByRoom: {
    "The Veranda": ["Sam"],
    "The Overlook": ["Anne"],
    NONE: ["Abby"],
    Poolside: ["Sean"]
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
    default: {
      return state;
    }
  }
}
