import { combineReducers } from '@reduxjs/toolkit'
import eventsReducer from './slices/eventsSlice'

const rootReducer = combineReducers({
  events: eventsReducer,
})

export default rootReducer
