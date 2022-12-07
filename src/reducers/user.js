import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: {
    login: "",
  },
  reducers: {
    logIn: (store, action) => {
      store.login = action.payload;
    },
  },
});

export default user;
