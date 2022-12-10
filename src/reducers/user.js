import { createSlice } from "@reduxjs/toolkit";
import { batch } from "react-redux";

import { BASE_API_URL } from "../utils/commons";

const user = createSlice({
  name: "user",
  initialState: {
    login: "",
    userId: "",
    accessToken: "",
  },
  reducers: {
    setLogIn: (store, action) => {
      store.login = action.payload;
    },
    setUserId: (store, action) => {
      store.userId = action.payload;
    },
    setAccessToken: (store, action) => {
      store.accessToken = action.payload;
    },
  },
});

export default user;

export const userLogin = (login, password, mode) => {
  return (dispatch, getState) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        login,
        password,
      }),
    };
    fetch(`${BASE_API_URL}/${mode}`, options)
      .then((res) => res.json())
      .then((data) => {
        batch(() => {
          dispatch(user.actions.setLogIn(data.response.login));
          dispatch(user.actions.setUserId(data.response.userId));
          dispatch(user.actions.setAccessToken(data.response.accessToken));
        });
      });
  };
};
