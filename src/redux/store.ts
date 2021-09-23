import { configureStore } from '@reduxjs/toolkit'
import cardCounter from './cardCounter'
import energyCounter from './energySlice'

export const store = configureStore({
  reducer: {
    energyCounter
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch