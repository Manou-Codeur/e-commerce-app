import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";
import Firebase from "./server/firebase/firebase-config";
import FirebaseContext from "./server/firebase/firebaseContext";

import { store } from "./store/configureStore";
import "./index.scss";

const firebase = new Firebase();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <FirebaseContext.Provider value={{ firebase }}>
          <App />
        </FirebaseContext.Provider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
