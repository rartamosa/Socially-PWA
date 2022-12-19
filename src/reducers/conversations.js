import { createSlice } from "@reduxjs/toolkit";
import { BASE_API_URL, CONVERSATIONS } from "../utils/commons";

const conversations = createSlice({
  name: "conversations",
  initialState: {
    list: [],
  },
  reducers: {
    setConversations: (store, action) => {
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

export const getMessages = () => {
  return (dispatch, getState) => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: getState().user.accessToken,
      },
    };
    fetch(`${BASE_API_URL}/${CONVERSATIONS}`, options)
      .then((res) => res.json())
      .then((data) =>
        dispatch(conversations.actions.setConversations(data.response))
      );
  };
};

export const sendMessage = (conversationId, authorId, message) => {
  return (dispatch, getState) => {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: getState().user.accessToken,
      },
      body: JSON.stringify({
        authorId,
        message,
      }),
    };
    fetch(`${BASE_API_URL}/${CONVERSATIONS}/${conversationId}`, options)
      .then((res) => res.json())
      .then((data) =>
        dispatch(conversations.actions.setSingleMessage(data.response))
      );
  };
};

export const sendMessageFromProfile = (userId, navigate) => {
  return (dispatch, getState) => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: getState().user.accessToken,
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
          return navigate(`/${CONVERSATIONS}/${data.response[0]._id}`);
        } else {
          dispatch(conversations.actions.setConversation(data.response[0]));
          navigate(`/${CONVERSATIONS}/${data.response[0]._id}`);
        }
      });
  };
};
