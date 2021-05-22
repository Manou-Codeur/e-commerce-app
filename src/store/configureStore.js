import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./auth";
import { cardReducer } from "./card";

export const store = configureStore({
  reducer: combineReducers({ authReducer, cardReducer }),
});
