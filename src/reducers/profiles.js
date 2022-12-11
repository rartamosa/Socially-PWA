import { createSlice } from "@reduxjs/toolkit";

import { BASE_API_URL } from "../utils/commons";

const profiles = createSlice({
  name: "profiles",
  initialState: {
    list: [],
  },
  reducers: {
    setProfiles: (store, action) => {
      store.list = action.payload;
    },
    setFollow: (store, action) => {
      store.list = store.list.map((user) => {
        if (user._id === action.payload._id) {
          return action.payload;
        } else {
          return user;
        }
      });
    },
  },
});

export default profiles;

export const getProfiles = (accessToken) => {
  return (dispatch, getState) => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken,
      },
    };
    fetch(`${BASE_API_URL}/users`, options)
      .then((res) => res.json())
      .then((data) => dispatch(profiles.actions.setProfiles(data.response)));
  };
};

export const followToggle = (userId, accessToken, mode) => {
  return (dispatch, getState) => {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken,
      },
    };
    fetch(`${BASE_API_URL}/user/${mode}/${userId}`, options)
      .then((res) => res.json())
      .then((data) => dispatch(profiles.actions.setFollow(data.response)));
  };
};
