export const roomReducer = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_ROOMS':
            return action.payload
        default: 
            return state
    }
}