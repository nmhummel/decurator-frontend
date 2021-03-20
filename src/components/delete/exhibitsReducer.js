export const exhibitsReducer = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_EXHIBITS':
            return action.payload
        default: 
            return state
    }
}