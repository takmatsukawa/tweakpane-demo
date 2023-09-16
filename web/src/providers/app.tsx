import React from "react";
import { createReducerContext } from "react-use";

type Action = "increment" | "decrement";

const reducer = (state: number, action: Action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      throw new Error();
  }
};

const [useSharedCounter, SharedCounterProvider] = createReducerContext(
  reducer,
  0,
);

type AppProviderProps = {
  children: React.ReactNode;
};

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <React.Suspense
      fallback={
        <div className="flex items-center justify-center w-screen h-screen">
          Now loading...
        </div>
      }
    >
      <SharedCounterProvider>{children}</SharedCounterProvider>
    </React.Suspense>
  );
};

export { AppProvider, useSharedCounter };
