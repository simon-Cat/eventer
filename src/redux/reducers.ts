import { combineReducers } from '@reduxjs/toolkit'
import eventsReducer from './slices/eventsSlice'
import popupReducer from './slices/popupSlice'

const rootReducer = combineReducers({
  events: eventsReducer,
  popup: popupReducer,
})

export default rootReducer
