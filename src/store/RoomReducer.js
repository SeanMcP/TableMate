import paramCase from "param-case";
import { ROOM_ACTION_TYPES } from "./RoomActions";

export const initialState = {
  byName: {
    "the-veranda": {
      tableSize: 6,
      tables: []
    },
    "the-overlook": {
      tableSize: 8,
      tables: []
    },
    poolside: {
      tableSize: 4,
      tables: []
    }
  }
};

export function reducer(state, action) {
  switch (action.type) {
    case ROOM_ACTION_TYPES.ADD_ROOM: {
      const byName = { ...state.byName };
      byName[paramCase(action.name)] = {
        tableSize: action.tableSize || 8,
        tables: []
      };
      return {
        ...state,
        byName
      };
    }
    case ROOM_ACTION_TYPES.REMOVE_ROOM: {
      const byName = { ...state.byName };
      delete byName[action.name];
      return {
        ...state,
        byName
      };
    }
    default: {
      return state;
    }
  }
}
