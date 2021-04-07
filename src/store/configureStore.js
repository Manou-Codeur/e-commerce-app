import { configureStore } from "@reduxjs/toolkit";
import { cardReducer } from "./card";

export const store = configureStore({
  reducer: cardReducer,
});
