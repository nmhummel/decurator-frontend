import { combineReducers } from 'redux'
import { paintingReducer } from './paintingReducer'
import { roomReducer } from './roomReducer'
import { galleryReducer } from './galleryReducer'

export const rootReducer = combineReducers({
    paintings: paintingReducer,
    rooms: roomReducer,
    galleries: galleryReducer

})