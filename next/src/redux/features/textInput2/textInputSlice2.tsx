import { RootState } from "@redux";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface TextInputState {
  value: string;
}

const initialState: TextInputState = {
  value: "",
};

const textInputSlice = createSlice({
  name: "textInput",
  initialState,
  reducers: {
    setTextInput2: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
const { setTextInput2 } = textInputSlice.actions;
const textInputSelector2 = (state: RootState) => state.textInput2.value;

export { setTextInput2, textInputSelector2, textInputSlice };
export type { TextInputState };
export default textInputSlice.reducer;
