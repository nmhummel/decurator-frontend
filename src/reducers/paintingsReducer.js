export const paintingsReducer = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_PAINTINGS':
            return action.payload
        default: 
            return state
    }
}