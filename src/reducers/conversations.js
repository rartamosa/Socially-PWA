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
    setSingleMessage: (store, action) => {
      store.list = store.list.map((conversation) => {
        if (conversation._id === action.payload._id) {
          return action.payload;
        } else {
          return conversation;
        }
      });
    },
    setConversation: (store, action) => {
      store.list = [...store.list, action.payload];
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

export const sendMessage = (accessToken, conversationId, authorId, message) => {
  return (dispatch, getState) => {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken,
      },
      body: JSON.stringify({
        authorId,
        message,
      }),
    };
    fetch(`${BASE_API_URL}/conversations/${conversationId}`, options)
      .then((res) => res.json())
      .then((data) =>
        dispatch(conversations.actions.setSingleMessage(data.response))
      );
  };
};

export const sendMessageFromProfile = (accessToken, userId, navigate) => {
  return (dispatch, getState) => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken,
      },
    };
    fetch(`${BASE_API_URL}/conversation/${userId}`, options)
      .then((res) => res.json())
      .then((data) => {
        if (
          getState().conversations.list.find(
            (conversation) => conversation._id === data.response[0]._id
          )
        ) {
          return navigate(`/conversations/${data.response[0]._id}`);
        } else {
          dispatch(conversations.actions.setConversation(data.response[0]));
          navigate(`/conversations/${data.response[0]._id}`);
        }
      });
  };
};
