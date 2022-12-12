import { createSlice } from "@reduxjs/toolkit";

import { BASE_API_URL } from "../utils/commons";

const feed = createSlice({
  name: "feed",
  initialState: {
    list: [],
  },
  reducers: {
    setFeed: (store, action) => {
      store.list = action.payload;
    },
    setLikes: (store, action) => {
      store.list = store.list.map((feed) => {
        if (feed._id === action.payload._id) {
          return action.payload;
        } else {
          return feed;
        }
      });
    },
  },
});

export default feed;

export const getFeed = (accessToken) => {
  return (dispatch, getState) => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken,
      },
    };
    fetch(`${BASE_API_URL}/feed`, options)
      .then((res) => res.json())
      .then((data) => dispatch(feed.actions.setFeed(data.response)));
  };
};

export const likeFeed = (accessToken, feedId) => {
  return (dispatch, getState) => {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken,
      },
    };
    fetch(`${BASE_API_URL}/feed/likes/${feedId}`, options)
      .then((res) => res.json())
      .then((data) => dispatch(feed.actions.setLikes(data.response)));
  };
};
