import React from "react";
import { NavLink } from "react-router-dom";

const TemporaryNavigation = () => {
  return (
    <nav>
      <NavLink to="/">Feed</NavLink>
      <NavLink to="/massages">Messages</NavLink>
      <NavLink to="/people">People</NavLink>
      <NavLink to="/myprofile">My profile</NavLink>
    </nav>
  );
};

export default TemporaryNavigation;
