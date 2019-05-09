export const ROOM_ACTION_TYPES = {
    ADD_ROOM: 'ADD_ROOM',
    REMOVE_ROOM: 'REMOVE_ROOM'
}

export function addRoom(dispatch) {
  return (name, tableSize) =>
    dispatch({
      type: ROOM_ACTION_TYPES.ADD_ROOM,
      name,
      tableSize
    });
}

export function removeRoom(dispatch) {
  return name =>
    dispatch({
      type: ROOM_ACTION_TYPES.REMOVE_ROOM,
      name
    });
}
