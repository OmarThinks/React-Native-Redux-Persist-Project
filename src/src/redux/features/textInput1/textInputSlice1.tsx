import {RootState} from '@redux';
import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';

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
const selectTextInput1 = (state: RootState) => state.textInput1.value;

export {selectTextInput1, setTextInput1, textInputSlice};
export type {TextInputState};
export default textInputSlice.reducer;
