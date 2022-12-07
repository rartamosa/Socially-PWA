import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Navigate } from "react-router";
import { Routes, Route } from "react-router";

import Messages from "../components/Messages";
import SingleMessage from "../components/SingleMessage";
import People from "../components/People";
import SingleUser from "../components/SingleUser";
import MyProfile from "../components/MyProfile";
import TemporaryNavigation from "../components/TemporaryNavigation";
import NotFound from "../components/NotFound";

const Main = () => {
  const storedLogin = useSelector((store) => store.user.login);
  const navigate = useNavigate();

  useEffect(() => {
    if (!storedLogin) {
      navigate("/signin");
    }
  }, [storedLogin]);

  return (
    <div>
      Main
      <TemporaryNavigation />
      <Routes>
        <Route path="/messages" element={<Messages />} />
        <Route path="/messages/:userName" element={<SingleMessage />} />
        <Route path="/people" element={<People />} />
        <Route path="/people/:userName" element={<SingleUser />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </div>
  );
};

export default Main;
