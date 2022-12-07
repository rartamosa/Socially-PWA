import React, { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
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
  const storedLogin = useSelector((store) => store.user.login);
  const [userToLogOut, setUserToLogOut] = useState(storedLogin);
  const dispatch = useDispatch();

  const goToPreviousScreen = () => {
    navigate(-1);
  };

  const loggingOut = () => {
    setUserToLogOut("");
    dispatch(user.actions.logIn(userToLogOut));
  };

  return (
    <>
      <header>
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
          />
          <BottomNavigationAction icon={<ChatBubbleOutlineIcon />} />
          <BottomNavigationAction icon={<AddCircleOutlineIcon />} />
          <BottomNavigationAction l icon={<PeopleOutlineIcon />} />
          <BottomNavigationAction icon={<AccountCircleIcon />} />
        </BottomNavigation>
      </Paper>
      <nav>
        <NavLink to="/">Feed</NavLink>
        <NavLink to="/messages">Messages</NavLink>
        <NavLink to="/people">People</NavLink>
        <NavLink to="/myprofile">My profile</NavLink>
      </nav>
    </>
  );
};

export default ScreenLayout;
