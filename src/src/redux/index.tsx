import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  PersistConfig,
  PersistMigrate,
  PersistedState,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import type {TextInputState} from './features/textInput1/textInputSlice1';
import textInputReducer1, {
  setTextInput1,
  textInputSelector1,
} from './features/textInput1/textInputSlice1';
import textInputReducer2, {
  setTextInput2,
  textInputSelector2,
} from './features/textInput2/textInputSlice2';

const textInput1Migrate: PersistMigrate = (
  state: PersistedState & TextInputState,
) => {
  console.log(state?.value);
  return Promise.resolve(state);
};

const textInput1PersistConfig: PersistConfig<TextInputState> = {
  storage: AsyncStorage,
  key: 'textInput1',
  version: 1,
  migrate: textInput1Migrate,
};

const rootReducer = combineReducers({
  textInput1: persistReducer(textInput1PersistConfig, textInputReducer1),
  textInput2: textInputReducer2,
});

const rootPersistConfig = {
  storage: AsyncStorage,
  key: 'root',
  version: 1,
  blacklist: ['textInput1', 'textInput2'],
};

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      //immutableCheck: {warnAfter: 128},
      serializableCheck: {
        //warnAfter: 128,
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

type RootState = ReturnType<typeof store.getState>;
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
