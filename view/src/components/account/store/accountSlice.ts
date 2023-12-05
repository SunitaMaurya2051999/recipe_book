import { createSlice } from '@reduxjs/toolkit'

export interface AccountState {
  isAccountModalOpen: boolean
}

const initialState: AccountState = {
  isAccountModalOpen: false,
}

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    closeAccountModal: (state) => {
      state.isAccountModalOpen = false
    },
    openAccountModal: (state) => {
      state.isAccountModalOpen = true
    },
  },
})

// Action creators are generated for each case reducer function
export const { closeAccountModal ,openAccountModal} = accountSlice.actions

export default accountSlice.reducer