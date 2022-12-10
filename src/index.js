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

import { ThemeProvider, createTheme } from "@mui/material/styles";

const reducer = combineReducers({
  user: user.reducer,
  feed: feed.reducer,
  conversations: conversations.reducer,
  profiles: profiles.reducer,
});

const store = configureStore({ reducer });

const theme = createTheme({
  components: {
    // MuiButton: {
    //   styleOverrides: {
    //     root: {
    //       // style
    //     },
    //   },
    // },
    MuiBottomNavigation: {
      styleOverrides: {
        root: {
          padding: "0px 45px 45px 45px",
          "& .MuiButtonBase-root": {
            minWidth: "57px",
          },
          "& .MuiButtonBase-root:nth-child(3)": {
            backgroundColor: "#000",
            color: "#fff",
            borderRadius: "23px",
            position: "relative",
            transform: "rotate(45deg)",
            bottom: "15px",
            "& .MuiSvgIcon-root": {
              transform: "rotate(-45deg)",
            },
          },
        },
      },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
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
