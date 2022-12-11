import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { followToggle } from "../reducers/profiles";

const PeopleListElement = ({ avatar, name, userId, followingUsers }) => {
  const loggedUserId = useSelector((store) => store.user.userId);
  const accessToken = useSelector((store) => store.user.accessToken);
  const dispatch = useDispatch();

  const followOrUnfollow = () => {
    dispatch(followToggle);
  };

  return (
    <>
      <div className="screen-layout__single-element people-container__single-user">
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
        <button
          onClick={() => followOrUnfollow(userId, accessToken)}
          className="people-container__button"
        >
          {followingUsers.find((user) => user._id === loggedUserId)
            ? "following"
            : "follow"}
        </button>
      </div>
    </>
  );
};

export default PeopleListElement;
