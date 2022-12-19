import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route, useNavigate } from "react-router";

import { CONVERSATIONS, PEOPLE, ADD } from "../utils/commons";

import Feed from "./Feed";
import ConversationsList from "./ConversationsList";
import SingleConversation from "./SingleConversation";
import PeopleList from "./PeopleList";
import SingleUser from "./SingleUser";
import Add from "./Add";
import ScreenLayout from "../components/ScreenLayout";

import { getMessages } from "../reducers/conversations";

const Main = () => {
  const accessToken = useSelector((store) => store.user.accessToken);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!accessToken) {
      navigate("/signin");
    }
  }, [accessToken, navigate]);

  useEffect(() => {
    if (accessToken) {
      dispatch(getMessages());
    }
  }, [accessToken, dispatch]);

  return (
    <Routes>
      <Route element={<ScreenLayout />}>
        <Route index element={<Feed />} />
        <Route path={CONVERSATIONS} element={<ConversationsList />} />
        <Route
          path={`${CONVERSATIONS}/:conversationId`}
          element={<SingleConversation />}
        />
        <Route path={ADD} element={<Add />} />
        <Route path={PEOPLE} element={<PeopleList />} />
        <Route path={`${PEOPLE}/:userId`} element={<SingleUser />} />
      </Route>
    </Routes>
  );
};

export default Main;
