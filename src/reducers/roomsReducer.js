export const roomsReducer = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_ROOMS':
            return action.payload
        case 'ADD_ROOM':
            return [...state, action.payload]
        case 'DELETE_ROOM':
            return state.filter(room => room.id !== action.payload.id)
        case 'ADD_PAINTING_TO_ROOM':
            let selectedRoomIndex = state.findIndex(room => room.id === action.payload.room.id)
            //let roomPaintings = state[selectedRoom].paintings
            //console.log(roomPaintings)
            return (
                [...state.slice(0, selectedRoomIndex), 
                action.payload.room,
                ...state.slice(selectedRoomIndex + 1)
                ]
            )
            
            // return [...state] 
            // return an array
            // we need to find the room (id) and return exact same array except room they want to add painting to
            // that room needs to now have attribute called paintings that holds info about added painting
        default: 
            return state
    }
}