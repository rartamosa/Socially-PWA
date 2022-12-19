import React from "react";
import { Outlet, useNavigate, Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BottomNavigation } from "@mui/material";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";

import HomeIcon from "@mui/icons-material/Home";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

import { SecondaryButton } from "../styled-components/Buttons";

import user from "../reducers/user";
import { CONVERSATIONS, PEOPLE, ADD } from "../utils/commons";

const ScreenLayout = () => {
  const userId = useSelector((store) => store.user.userId);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const goToPreviousScreen = () => {
    navigate(-1);
  };

  const loggingOut = () => {
    dispatch(user.actions.setLogOut());
  };

  const generateBackgroundClassName = () => {
    if (location.pathname === "/") {
      return "screen-layout__background_feed";
    } else if (location.pathname === `/${CONVERSATIONS}`) {
      return "screen-layout__background_messages";
    } else if (location.pathname === `/${PEOPLE}`) {
      return "screen-layout__background_people";
    } else if (
      location.pathname.includes("people") &&
      location.pathname !== `/${PEOPLE}`
    ) {
      return "screen-layout__background_myprofile";
    } else if (
      location.pathname.includes("conversations") &&
      location.pathname !== `/${CONVERSATIONS}`
    ) {
      return "screen-layout__background_singlemessage";
    }
  };

  const generateIconColor = (icon) => {
    if (location.pathname === "/" && icon === "feed") {
      return "#7DB9B3";
    } else if (
      location.pathname === `/${CONVERSATIONS}` &&
      icon === "conversations"
    ) {
      return "#7DB9B3";
    } else if (
      (location.pathname === `/${PEOPLE}` && icon === "people") ||
      (location.pathname !== `/${PEOPLE}/${userId}` &&
        location.pathname.includes("people") &&
        icon === "people")
    ) {
      return "#7DB9B3";
    } else if (
      location.pathname === `/${PEOPLE}/${userId}` &&
      icon === "userId"
    ) {
      return "#7DB9B3";
    } else {
      return "#000";
    }
  };

  return (
    <div className={generateBackgroundClassName()}>
      <header className="screen-layout_header">
        <div className="screen-layout_container">
          <SecondaryButton onClick={goToPreviousScreen}>
            <ArrowBackIcon />
          </SecondaryButton>

          <p className="screen-layout_logo">Socially</p>

          <SecondaryButton onClick={loggingOut}>
            <PowerSettingsNewIcon />
          </SecondaryButton>
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
            component={Link}
            to="/"
          />
          <BottomNavigationAction
            icon={
              <ChatBubbleOutlineIcon
                htmlColor={generateIconColor("conversations")}
              />
            }
            component={Link}
            to={`/${CONVERSATIONS}`}
          />
          <BottomNavigationAction
            icon={<AddCircleOutlineIcon />}
            component={Link}
            to={`/${ADD}`}
          />
          <BottomNavigationAction
            icon={<PeopleOutlineIcon htmlColor={generateIconColor("people")} />}
            component={Link}
            to={`/${PEOPLE}`}
          />
          <BottomNavigationAction
            icon={<AccountCircleIcon htmlColor={generateIconColor("userId")} />}
            component={Link}
            to={`/${PEOPLE}/${userId}`}
          />
        </BottomNavigation>
      </Paper>
    </div>
  );
};

export default ScreenLayout;
