import { createSlice } from "@reduxjs/toolkit";

import { BASE_API_URL } from "../utils/commons";

const feed = createSlice({
  name: "feed",
  initialState: {
    list: [],
  },
  reducers: {
    setFeed: (store, action) => {
      store.list = action.payload.sort((a, b) => b.createdAt - a.createdAt);
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

export const toggleLikeFeed = (accessToken, feedId) => {
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

export const postFeed = (accessToken, image, navigate) => {
  return (dispatch, getState) => {
    const formData = new FormData();
    formData.append("image", image);
    const options = {
      method: "POST",
      headers: {
        Authorization: accessToken,
      },
      body: formData,
    };
    fetch(`${BASE_API_URL}/feed`, options)
      .then((res) => res.json())
      .then((data) => navigate(`/people/${data.response.user._id}`));
  };
};
