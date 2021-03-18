export const roomsReducer = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_ROOMS':
            return action.payload
        case 'ADD_ROOM':
            return [...state, action.payload]
        case 'DELETE_ROOM':
            debugger;
            return state.filter(room => room.id !== action.payload.id)
        // case 'ADD_PAINTING_TO_ROOM':
        //     debugger
        //     return [
        //         ...state.filter(room => room.id !== action.room.id),
        //         Object.assign({}, action.room)
        //       ]

            // return [...state] 
            // return an array
            // we need to find the room (id) and return exact same array except room they want to add painting to
            // that room needs to now have attribute called paintings that holds info about added painting
        default: 
            return state
    }
}