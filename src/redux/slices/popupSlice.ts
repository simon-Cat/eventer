import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'

export interface PopupState {
  info: {
    title: string
    variant: string
  }
}

const initialState: PopupState = {
  info: {
    title: '',
    variant: '',
  },
}

export const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    openPopup: (state, action: PayloadAction<{ title: string; variant: string }>) => {
      state.info = action.payload
    },
    closeAllPopups: (state) => {
      state.info = { title: '', variant: '' }
    },
  },
})

export const { openPopup, closeAllPopups } = popupSlice.actions
export default popupSlice.reducer
