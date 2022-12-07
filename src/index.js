import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import user from "./reducers/user";
import feed from "./reducers/feed";
import conversations from "./reducers/conversations";
import profiles from "./reducers/profiles";

import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";

import "./index.css";

const reducer = combineReducers({
  user: user.reducer,
  feed: feed.reducer,
  conversations: conversations.reducer,
  profiles: profiles.reducer,
});

const store = configureStore({ reducer });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
