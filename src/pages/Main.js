import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Routes, Route, useNavigate } from "react-router";

import Feed from "../components/Feed";
import Messages from "../components/Messages";
import SingleMessage from "../components/SingleMessage";
import People from "../components/People";
import SingleUser from "../components/SingleUser";
import ScreenLayout from "../components/ScreenLayout";

const Main = () => {
  const storedLogin = useSelector((store) => store.user.login);
  const navigate = useNavigate();

  useEffect(() => {
    if (!storedLogin) {
      navigate("/signin");
    }
  }, [storedLogin]);

  return (
    <Routes>
      <Route element={<ScreenLayout />}>
        <Route index element={<Feed />} />
        <Route path="messages" element={<Messages />} />
        <Route path="messages/:userName" element={<SingleMessage />} />
        <Route path="people" element={<People />} />
        <Route path="people/:userName" element={<SingleUser />} />
        <Route path="myprofile" element={<SingleUser />} />
      </Route>
    </Routes>
  );
};

export default Main;
