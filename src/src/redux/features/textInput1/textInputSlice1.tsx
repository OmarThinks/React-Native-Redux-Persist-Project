import AsyncStorage from '@react-native-async-storage/async-storage';
import {RootState} from '@redux';
import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import {
  PersistConfig,
  PersistMigrate,
  PersistedState,
  persistReducer,
} from 'redux-persist';

type TextInputState = {
  value: string;
};

const initialState: TextInputState = {
  value: '',
};

const textInputSlice = createSlice({
  name: 'textInput',
  initialState,
  reducers: {
    setTextInput1: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
const {setTextInput1} = textInputSlice.actions;
const textInputSelector1 = (state: RootState) => state.textInput1.value;

const textInput1Migrate: PersistMigrate = (state: PersistedState) => {
  const _state = state as PersistedState & TextInputState;

  console.log(_state?.value);

  let newState = {} as PersistedState & TextInputState;

  if (state?._persist) {
    newState._persist = state._persist;
  }

  if (_state === undefined) {
    //newState[key  as keyof TextInputState] = initialState[key as keyof TextInputState]
    newState = {...newState, ...initialState};
  } else {
    for (const key in initialState) {
      if (key in _state) {
        newState[key as keyof TextInputState] =
          _state[key as keyof TextInputState];
      } else {
        newState[key as keyof TextInputState] =
          initialState[key as keyof TextInputState];
      }
    }
  }

  return Promise.resolve(newState);
};

const textInput1PersistConfig: PersistConfig<TextInputState> = {
  storage: AsyncStorage,
  key: 'textInput1',
  version: 1,
  migrate: textInput1Migrate,
};

const textInput1Reducer = persistReducer(
  textInput1PersistConfig,
  textInputSlice.reducer,
);

export {
  setTextInput1,
  textInput1Migrate,
  textInput1PersistConfig,
  textInputSelector1,
  textInputSlice,
};
export type {TextInputState};
export default textInput1Reducer;
