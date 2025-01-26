import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Events, IEvent } from '@/types/types'

export interface EventsState {
  events: Events
}

const initialState: EventsState = {
  events: [],
}

export const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setEvents: (state, action: PayloadAction<Events>) => {
      state.events = action.payload
    },
    addEvent: (state, action: PayloadAction<IEvent>) => {
      state.events = [...state.events, action.payload]
    },
    editEvent: (state, action: PayloadAction<IEvent>) => {
      const newEventData = action.payload
      const editedEventIndex = state.events.findIndex((event) => event.id === newEventData.id)
      state.events[editedEventIndex] = newEventData
    },
    deleteEvent: (state, action: PayloadAction<number>) => {
      const idOfDeletedEvent = action.payload
      state.events = state.events.filter((event) => event.id !== idOfDeletedEvent)
    },
  },
})

export const { setEvents, addEvent, deleteEvent, editEvent } = eventsSlice.actions
export default eventsSlice.reducer
