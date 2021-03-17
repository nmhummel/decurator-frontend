export const paintingsReducer = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_PAINTINGS':
            console.log(action.payload)
            return action.payload
        case 'ADD_PAINTING_TO_ROOM':
            console.log(state)
            return {
                ...state,
                thing: state.thing
            };
        default: 
            return state
    }
}