import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import textInputReducer1, {
  setTextInput1,
  textInputSelector1,
} from './features/textInput1/textInputSlice1';
import textInputReducer2, {
  setTextInput2,
  textInputSelector2,
} from './features/textInput2/textInputSlice2';
import {FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from 'redux-persist';

const rootReducer = combineReducers({
  textInput1: textInputReducer1,
  textInput2: textInputReducer2,
});

const persistConfig = {
  storage: AsyncStorage,
  key: 'root',
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: {warnAfter: 128},
      serializableCheck: {
        warnAfter: 128,
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
type AppDispatch = typeof store.dispatch;

export {
  persistor,
  setTextInput1,
  setTextInput2,
  store,
  textInputSelector1,
  textInputSelector2,
};
export type {AppDispatch, RootState};
