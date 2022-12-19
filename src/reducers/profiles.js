import { createSlice } from "@reduxjs/toolkit";

import { BASE_API_URL, USER, USERS } from "../utils/commons";

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

export const getProfiles = () => {
  return (dispatch, getState) => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: getState().user.accessToken,
      },
    };
    fetch(`${BASE_API_URL}/${USERS}`, options)
      .then((res) => res.json())
      .then((data) => dispatch(profiles.actions.setProfiles(data.response)));
  };
};

export const followToggle = (userId, mode) => {
  return (dispatch, getState) => {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: getState().user.accessToken,
      },
    };
    fetch(`${BASE_API_URL}/${USER}/${mode}/${userId}`, options)
      .then((res) => res.json())
      .then((data) => dispatch(profiles.actions.setFollow(data.response)));
  };
};
