import { createSlice } from '@reduxjs/toolkit'

export interface ProfileState {
  isProfileDrawerOpen: boolean
}

const initialState: ProfileState = {
  isProfileDrawerOpen: false,
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    closeProfileDrawer: (state) => {
      state.isProfileDrawerOpen = false
    },
    openProfileDrawer: (state) => {
      state.isProfileDrawerOpen = true
    },
  },
})

// Action creators are generated for each case reducer function
export const { closeProfileDrawer ,openProfileDrawer} = profileSlice.actions

export default profileSlice.reducer