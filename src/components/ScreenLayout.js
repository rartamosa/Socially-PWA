import React from "react";
import { Outlet, useNavigate, Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
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
  const dispatch = useDispatch();
  const location = useLocation();

  const goToPreviousScreen = () => {
    navigate(-1);
  };

  const loggingOut = () => {
    dispatch(user.actions.logIn(""));
  };

  const generateBackgroundClassName = () => {
    if (location.pathname === "/") {
      return "screen-layout__background_feed";
    } else if (location.pathname === "/messages") {
      return "screen-layout__background_messages";
    }
  };

  const generateIconColor = (icon) => {
    if (location.pathname === "/" && icon === "feed") {
      return "#7DB9B3";
    } else if (location.pathname === "/messages" && icon === "messages") {
      return "#7DB9B3";
    } else if (location.pathname === "/people" && icon === "people") {
      return "#7DB9B3";
    } else if (location.pathname === "/myprofile" && icon === "myprofile") {
      return "#7DB9B3";
    } else {
      return "#000";
    }
  };

  return (
    <div className={generateBackgroundClassName()}>
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
            icon={<HomeIcon htmlColor={generateIconColor("feed")} />}
            // className={({ isActive }) =>
            //   isActive ? "screen-layout__active" : undefined
            // }
            component={Link}
            to="/"
          />
          <BottomNavigationAction
            icon={
              <ChatBubbleOutlineIcon
                htmlColor={generateIconColor("messages")}
              />
            }
            component={Link}
            to="/messages"
          />
          <BottomNavigationAction icon={<AddCircleOutlineIcon />} />
          <BottomNavigationAction
            icon={<PeopleOutlineIcon htmlColor={generateIconColor("people")} />}
            component={Link}
            to="/people"
          />
          <BottomNavigationAction
            icon={
              <AccountCircleIcon htmlColor={generateIconColor("myprofile")} />
            }
            component={Link}
            to="/myprofile"
          />
        </BottomNavigation>
      </Paper>
    </div>
  );
};

export default ScreenLayout;
