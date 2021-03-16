export const paintingsReducer = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_PAINTINGS':
            console.log(action.payload)
            return action.payload
        default: 
            return state
    }
}