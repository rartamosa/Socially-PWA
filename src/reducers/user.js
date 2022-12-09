import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: {
    token: "",
  },
  reducers: {
    logIn: (store, action) => {
      store.token = action.payload;
    },
  },
});

export default user;
