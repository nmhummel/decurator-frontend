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



