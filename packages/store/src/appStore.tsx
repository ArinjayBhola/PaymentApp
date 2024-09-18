import { configureStore } from "@reduxjs/toolkit";
import useBalance from "./slice/useBalance";

export const AppStore = configureStore({
  reducer: {
    balance: useBalance,
  },
});
