import { ROOM_ACTION_TYPES } from './RoomActions'

export const initialState = {
  byName: {}
};

export function reducer(state, action) {
  switch (action.type) {
    case ROOM_ACTION_TYPES.ADD_ROOM: {
      const byName = { ...state.byName };
      byName[action.name] = {
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
