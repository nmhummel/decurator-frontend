export const fetchRooms = () => {
    return dispatch => {
        fetch('https://secure-dawn-14818.herokuapp.com/rooms')
        .then(resp => resp.json())
        .then(room => dispatch({ type: 'FETCH_ROOMS', payload: room}))
    }
}

export const fetchSingleRoom = (id) => {
    return dispatch => {
        fetch(`https://secure-dawn-14818.herokuapp.com/rooms/${id}`)
        .then(resp => resp.json())
        .then(room => dispatch({ type: 'FETCH_SINGLE_ROOMS', payload: room}))
    }
}

export const addRoom = (room) => {
    return dispatch => {
        fetch('https://secure-dawn-14818.herokuapp.com/rooms', {
            method: 'POST',
            body: JSON.stringify(room),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(resp => resp.json())
        .then(room => dispatch({ type: 'ADD_ROOM', payload: room}))
    }
}

export const deleteRoom = (id) => {
    return dispatch => {
        fetch(`https://secure-dawn-14818.herokuapp.com/rooms/${id}`, {
            method: 'DELETE',
            body: JSON.stringify(id)
        })
        .then(resp => resp.json())
        .then(room => dispatch({ type: 'DELETE_ROOM', payload: room}))
    }
}

export const addPaintingToRoom = (id, painting) => {
    return dispatch => {
        fetch(`https://secure-dawn-14818.herokuapp.com/rooms/${id}`, {
            method: 'PATCH',
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json' },
            body: JSON.stringify({painting_id: painting.id})
        })
        .then(resp => resp.json())
        .then(room => dispatch({type: 'ADD_PAINTING_TO_ROOM', payload: {room, painting}}))
    }
}