import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Routes, Route, useNavigate } from "react-router";

import Feed from "./Feed";
import ConversationsList from "./ConversationsList";
import SingleConversation from "./SingleConversation";
import PeopleList from "./PeopleList";
import SingleUser from "./SingleUser";
import Add from "./Add";
import ScreenLayout from "../components/ScreenLayout";

const Main = () => {
  const accessToken = useSelector((store) => store.user.accessToken);
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      navigate("/signin");
    }
  }, [accessToken]);

  return (
    <Routes>
      <Route element={<ScreenLayout />}>
        <Route index element={<Feed />} />
        <Route path="conversations" element={<ConversationsList />} />
        <Route
          path="conversations/:conversationId"
          element={<SingleConversation />}
        />
        <Route path="add" element={<Add />} />
        <Route path="people" element={<PeopleList />} />
        <Route path="people/:userId" element={<SingleUser />} />
      </Route>
    </Routes>
  );
};

export default Main;
