export const addRoom = room => {
    return (dispatch) => {
        fetch('http://127.0.0.1:3000/paintings', {
            method: 'POST',
            body: JSON.stringify(room),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(resp => resp.json())
        .then(room => dispatch({ type: 'ADD_ROOM', payload: room}))
    }
}



