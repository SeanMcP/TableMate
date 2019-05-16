export const STORE_ACTION_TYPES = {
  ADD_NEW_GUEST: "ADD_NEW_GUEST",
  ADD_NEW_ROOM: "ADD_NEW_ROOM",
  MOVE_GUEST: "MOVE_GUEST",
  REORDER_GUEST: "REORDER_GUEST"
};

export function addNewGuest(dispatch) {
  return (name, room) =>
    dispatch({
      type: STORE_ACTION_TYPES.ADD_NEW_GUEST,
      name,
      room
    });
}

export function addNewRoom(dispatch) {
  return name =>
    dispatch({
      type: STORE_ACTION_TYPES.ADD_NEW_ROOM,
      name
    });
}

export function moveGuest(dispatch) {
  return (source, sourceIndex, destination, destinationIndex) =>
    dispatch({
      type: STORE_ACTION_TYPES.MOVE_GUEST,
      source,
      sourceIndex,
      destination,
      destinationIndex
    });
}

export function reorderGuest(dispatch) {
  return (source, sourceIndex, destinationIndex) =>
    dispatch({
      type: STORE_ACTION_TYPES.REORDER_GUEST,
      source,
      sourceIndex,
      destinationIndex
    });
}
