import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './Slices/UsersSlice.js'

export const store = configureStore({
    reducer: {
        users: usersReducer
    },
})