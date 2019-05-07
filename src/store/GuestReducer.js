import { GUEST_ACTION_TYPES } from './GuestActions'

export const initialState = {
  byName: {}
};

export function reducer(state, action) {
  switch (action.type) {
    case GUEST_ACTION_TYPES.ADD_GUEST: {
      const byName = { ...state.byName };
      byName[action.name] = {
        room: null,
        table: null
      };
      return {
        ...state,
        byName
      };
    }
    case GUEST_ACTION_TYPES.REMOVE_GUEST: {
      const byName = { ...state.byName };
      delete byName[action.name];
      return {
        ...state,
        byName
      };
    }
    case GUEST_ACTION_TYPES.SEAT_GUEST: {
      const byName = { ...state.byName };
      byName[action.name] = {
        room: action.room,
        table: action.table
      };
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