export const roomsReducer = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_ROOMS':
            return action.payload
        case 'ADD_ROOM':
            return [...state, action.payload]
        case 'DELETE_ROOM':
            //debugger;
            return state.filter(room => room.id !== action.payload.id)
        default: 
            return state
    }
}