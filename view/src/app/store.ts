import { configureStore } from '@reduxjs/toolkit'
import accountReducer from '../components/account/store/accountSlice';
import profileReducer from '../components/dashboard/store/profileSlice'

export const store = configureStore({
  reducer: {
    account:accountReducer,
    profile:profileReducer
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch