import React, { useState } from "react";
import { NavLink, Outlet, useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { BottomNavigation } from "@mui/material";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import HomeIcon from "@mui/icons-material/Home";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import user from "../reducers/user";

const ScreenLayout = () => {
  const navigate = useNavigate();
  // const storedLogin = useSelector((store) => store.user.login);
  const dispatch = useDispatch();

  const goToPreviousScreen = () => {
    navigate(-1);
  };

  const loggingOut = () => {
    dispatch(user.actions.logIn(""));
  };

  return (
    <>
      <header className="screen-layout_header">
        <div className="screen-layout_container">
          <div
            onClick={goToPreviousScreen}
            className="screen-layout_back-arrow"
          ></div>
          <p className="screen-layout_logo">Socially</p>
          <div onClick={loggingOut} className="screen-layout_logout"></div>
        </div>
      </header>

      <Outlet />

      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation>
          <BottomNavigationAction
            // icon={<img src="./public/assets/feed_icon.png" />}
            icon={<HomeIcon />}
            // className={({ isActive }) =>
            //   isActive ? "screen-layout__active" : undefined
            // }
            component={Link}
            to="/"
          />
          <BottomNavigationAction
            icon={<ChatBubbleOutlineIcon />}
            component={Link}
            to="/messages"
          />
          <BottomNavigationAction icon={<AddCircleOutlineIcon />} />
          <BottomNavigationAction
            icon={<PeopleOutlineIcon />}
            component={Link}
            to="/people"
          />
          <BottomNavigationAction
            icon={<AccountCircleIcon />}
            component={Link}
            to="/myprofile"
          />
        </BottomNavigation>
      </Paper>
    </>
  );
};

export default ScreenLayout;
