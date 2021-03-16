export const galleryReducer = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_GALLERIES':
            return action.payload
        default: 
            return state
    }
}