"use client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@redux";

export default function Home() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <div>
            <p>Hey</p>
          </div>
        </main>
      </PersistGate>
    </Provider>
  );
}
