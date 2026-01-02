import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ApplicationState {
  activeMenuItem: number
}

const initialState = {
  activeMenuItem: 0,
}

export const applicationSlice = createSlice({
  name: 'application',
  initialState,
  reducers: {
    setActiveActiveMenuItem: (state, action: PayloadAction<number>) => {
      state.activeMenuItem = action.payload
    },
  },
})

export const { setActiveActiveMenuItem } = applicationSlice.actions

export default applicationSlice.reducer
