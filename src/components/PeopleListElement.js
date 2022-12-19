import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { followToggle } from "../reducers/profiles";
import { PEOPLE } from "../utils/commons";

const PeopleListElement = ({ avatar, name, userId, followingUsers }) => {
  const loggedUserId = useSelector((store) => store.user.userId);
  const dispatch = useDispatch();

  const isUserFollowed = followingUsers.find(
    (user) => user._id === loggedUserId
  )
    ? "unfollow"
    : "follow";

  const followOrUnfollow = () => {
    dispatch(followToggle(userId, isUserFollowed));
  };

  return (
    <div className="screen-layout__single-element people-container__single-user">
      <Link to={`/${PEOPLE}/${userId}`}>
        <div className="people-container__user-data">
          <div className="screen-layout__user-avatar_border">
            <div
              className="screen-layout__user-avatar"
              style={{ backgroundImage: `url(${avatar})` }}
            ></div>
          </div>
          <p className="screen-layout__user-name people-container__user-name">
            {name || "No name"}
          </p>
        </div>
      </Link>

      <button onClick={followOrUnfollow} className="people-container__button">
        {isUserFollowed === "unfollow" ? "following" : "follow"}
      </button>
    </div>
  );
};

export default PeopleListElement;
