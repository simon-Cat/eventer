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
  },
})

export const { setEvents, addEvent } = eventsSlice.actions
export default eventsSlice.reducer
