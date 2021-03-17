export const fetchRooms = () => {
    return dispatch => {
        fetch('http://127.0.0.1:3000/rooms')
        .then(resp => resp.json())
        .then(room => dispatch({ type: 'FETCH_ROOMS', payload: room}))
    }
}

export const addRoom = (room) => {
    return dispatch => {
        fetch('http://127.0.0.1:3000/rooms', {
            method: 'POST',
            body: JSON.stringify(room),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(resp => resp.json())
        .then(room => dispatch({ type: 'ADD_ROOM', payload: room}))
    }
}

export const deleteRoom = (room, id) => {
    return dispatch => {
        fetch(`http://127.0.0.1:3000/rooms/${id}`, {
            method: 'DELETE',
            body: JSON.stringify(room),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(resp => resp.json())
        .then(room => dispatch({ type: 'DELETE_ROOM', payload: room}))
    }
}
// fix this, yo