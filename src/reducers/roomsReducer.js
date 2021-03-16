export const roomsReducer = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_ROOMS':
            return action.payload
        case 'ADD_ROOM':
            return [...state, action.payload]
        default: 
            return state
    }
}