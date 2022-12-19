import { combineReducers, configureStore } from "@reduxjs/toolkit";

import user from "./reducers/user";
import feed from "./reducers/feed";
import conversations from "./reducers/conversations";
import profiles from "./reducers/profiles";

export const reducer = combineReducers({
  user: user.reducer,
  feed: feed.reducer,
  conversations: conversations.reducer,
  profiles: profiles.reducer,
});

const store = configureStore({ reducer });

export default store;
