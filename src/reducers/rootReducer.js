import { combineReducers } from 'redux'
import { paintingsReducer } from './paintingsReducer'
import { roomsReducer } from './roomsReducer'

export const rootReducer = combineReducers({
    paintings: paintingsReducer,
    rooms: roomsReducer
})