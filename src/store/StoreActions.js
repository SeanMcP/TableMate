export const STORE_ACTION_TYPES = {
    ADD_NEW_GUEST: 'ADD_NEW_GUEST',
    ADD_NEW_ROOM: 'ADD_NEW_ROOM'
}

export function addNewGuest(dispatch) {
    return (name, room) => dispatch({
        type: STORE_ACTION_TYPES.ADD_NEW_GUEST,
        name,
        room
    })
}

export function addNewRoom(dispatch) {
    return (name) => dispatch({
        type: STORE_ACTION_TYPES.ADD_NEW_ROOM,
        name
    })
}