"use client";
import {
  persistor,
  setTextInput1,
  setTextInput2,
  store,
  textInputSelector1,
  textInputSelector2,
} from "@redux";
import React, { memo, useCallback } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export default function Home() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <main className="flex min-h-screen flex-col items-center justify-between p-24 self-stretch bg-black">
          <div className="self-stretch ">
            <App />
          </div>
        </main>
      </PersistGate>
    </Provider>
  );
}

const App = () => {
  const dispatch = useDispatch();

  const textInput1 = useSelector(textInputSelector1);
  const textInput2 = useSelector(textInputSelector2);

  const updateTextInput1 = useCallback(
    (text: string) => dispatch(setTextInput1(text)),
    [dispatch]
  );
  const updateTextInput2 = useCallback(
    (text: string) => dispatch(setTextInput2(text)),
    [dispatch]
  );

  return (
    <div className="flex-1 justify-center items-center m-4 gap-[100px] flex flex-col">
      <TextInputContainer
        header={"Persisted"}
        value={textInput1}
        setValue={updateTextInput1}
        textColor={"lime"}
      />

      <TextInputContainer
        header={"Not Persisted"}
        value={textInput2}
        setValue={updateTextInput2}
        textColor={"pink"}
      />
    </div>
  );
};

const TextInputContainer = ({
  header,
  value,
  setValue,
  textColor,
}: {
  header: string;
  value: string;
  setValue: (a: string) => void;
  textColor: string;
}) => {
  return (
    <div className="gap-[10px] self-stretch items-center justify-center flex flex-col">
      <p className="text-[30px] text-white font-bold self-stretch text-center">
        {header}: <p style={{ color: textColor, display: "inline" }}>{value}</p>
      </p>
      <input
        type="text"
        value={value}
        onChange={(a) => setValue(a.target.value)}
        style={{ color: textColor }}
        className="border-[1px] rounded-[5px] border-white text-black bg-black"
      />
    </div>
  );
};
