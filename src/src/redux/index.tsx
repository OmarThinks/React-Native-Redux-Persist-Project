import {configureStore} from '@reduxjs/toolkit';
import textInputReducer1 from './features/textInput1/textInputSlice1';

const store = configureStore({
  reducer: {
    textInput1: textInputReducer1,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
type AppDispatch = typeof store.dispatch;

export {store};
export type {RootState, AppDispatch};
