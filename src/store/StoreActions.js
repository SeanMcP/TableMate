export const STORE_ACTION_TYPES = {
    ADD_NEW_GUEST: 'ADD_NEW_GUEST'
}

export function addNewGuest(dispatch) {
    return (name, room) => dispatch({
        type: STORE_ACTION_TYPES.ADD_NEW_GUEST,
        name,
        room
    })
}