export const GUEST_ACTION_TYPES = {
    ADD_GUEST: 'ADD_GUEST',
    REMOVE_GUEST: 'REMOVE_GUEST',
    SEAT_GUEST: 'SEAT_GUEST',
}

export function addGuest(dispatch) {
  return name =>
    dispatch({
      type: GUEST_ACTION_TYPES.ADD_GUEST,
      name
    });
}

export function removeGuest(dispatch) {
  return name =>
    dispatch({
      type: GUEST_ACTION_TYPES.REMOVE_GUEST,
      name
    });
}
