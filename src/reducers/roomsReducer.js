export const roomsReducer = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_ROOMS':
            return action.payload
        case 'FETCH_SINGLE_ROOM':
            debugger
            return state.findIndex(room => room.id === action.payload.room.id)
        case 'ADD_ROOM':
            return [...state, action.payload]
        case 'DELETE_ROOM':
            return state.filter(room => room.id !== action.payload.id)
        case 'ADD_PAINTING_TO_ROOM':
            let selectedRoomIndex = state.findIndex(room => room.id === action.payload.room.id)
            return (
                [...state.slice(0, selectedRoomIndex), 
                action.payload.room,
                ...state.slice(selectedRoomIndex + 1)
                ]
            )
        default: 
            return state
    }
}