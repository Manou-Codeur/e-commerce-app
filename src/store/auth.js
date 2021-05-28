import { createAction, createReducer } from "@reduxjs/toolkit";
import jwtGenerator from "jwt-decode";

//if the user is authed => state with uid, else => state without any data
var initState;
try {
  const { user_id, aud } = jwtGenerator(
    JSON.parse(localStorage.getItem("user-authed"))
  );

  if (aud !== "react-e-commerce-app-18fea") throw new Error();

  initState = {
    userAuthed: true,
    uid: user_id,
  };
} catch (e) {
  initState = {
    userAuthed: false,
    uid: null,
  };
}

// The action creator and the reducer have no effect here, i used it only to fill the reducer
// coz once i signIn or signOut the app will reload, and the redux state will be set due
// the try catch block i used right above
export const signOut = createAction("SIGN_OUT");

export const authReducer = createReducer(initState, {
  [signOut.type]: (state, action) => {
    state.userAuthed = false;
    state.uid = null;
  },
});
