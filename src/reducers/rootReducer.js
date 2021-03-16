import { combineReducers } from 'redux'
import { paintingsReducer } from './paintingsReducer'
import { roomsReducer } from './roomsReducer'
import { exhibitsReducer } from './exhibitsReducer'

export const rootReducer = combineReducers({
    paintings: paintingsReducer,
    rooms: roomsReducer,
    exhibits: exhibitsReducer
})