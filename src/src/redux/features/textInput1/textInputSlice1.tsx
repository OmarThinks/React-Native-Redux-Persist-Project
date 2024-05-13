import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

interface TextInputState {
  value: string;
}

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

export default textInputSlice.reducer;
export {setTextInput1, textInputSlice};
export type {TextInputState};
