import { createSlice } from "@reduxjs/toolkit";
import { batch } from "react-redux";

import { BASE_API_URL } from "../utils/commons";

const user = createSlice({
  name: "user",
  initialState: {
    login: "",
    userId: "",
    accessToken: "",
    userName: "",
    userAvatar: "",
    error: "",
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
    setUserName: (store, action) => {
      store.userName = action.payload;
    },
    setUserAvatar: (store, action) => {
      store.userAvatar = action.payload;
    },
    setError: (store, action) => {
      store.error = action.payload;
    },
    setLogOut: (store) => {
      store.accessToken = "";
      store.login = "";
      store.userId = "";
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
        if (!data.success && mode === "signin") {
          dispatch(user.actions.setError(data.response));
        } else if (!data.success && mode === "signup") {
          dispatch(user.actions.setError(data.response.message));
        } else {
          batch(() => {
            dispatch(user.actions.setLogIn(data.response.login));
            dispatch(user.actions.setUserId(data.response.userId));
            dispatch(user.actions.setAccessToken(data.response.accessToken));
            dispatch(user.actions.setError(""));
          });
        }
      });
  };
};

export const getUserData = (accessToken) => {
  return (dispatch, getState) => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken,
      },
    };
    fetch(`${BASE_API_URL}/user`, options)
      .then((res) => res.json())
      .then((data) => {
        batch(() => {
          dispatch(user.actions.setUserName(data.response.name));
          dispatch(user.actions.setUserAvatar(data.response.image));
        });
      });
  };
};

export const getUserAvatar = (accessToken, image) => {
  return (dispatch, getState) => {
    const formData = new FormData();
    formData.append("image", image);
    const options = {
      method: "PUT",
      headers: {
        Authorization: accessToken,
      },
      body: formData,
    };
    fetch(`${BASE_API_URL}/user`, options)
      .then((res) => res.json())
      .then((data) =>
        dispatch(user.actions.setUserAvatar(data.response.image))
      );
  };
};

export const getUserName = (accessToken, name) => {
  return (dispatch, getState) => {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken,
      },
      body: JSON.stringify({
        name,
      }),
    };
    fetch(`${BASE_API_URL}/user`, options)
      .then((res) => res.json())
      .then((data) => dispatch(user.actions.setUserName(data.response.name)));
  };
};
