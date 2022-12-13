import { createSlice } from "@reduxjs/toolkit";
import { BASE_API_URL } from "../utils/commons";

const conversations = createSlice({
  name: "conversations",
  initialState: {
    list: [],
  },
  reducers: {
    setMessages: (store, action) => {
      store.list = action.payload;
    },
  },
});

export default conversations;

export const getMessages = (accessToken) => {
  return (dispatch, getState) => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken,
      },
    };
    fetch(`${BASE_API_URL}/conversations`, options)
      .then((res) => res.json())
      .then((data) =>
        dispatch(conversations.actions.setMessages(data.response))
      );
  };
};
