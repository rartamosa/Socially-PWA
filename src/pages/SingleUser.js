import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import { getUserData } from "../reducers/user";
import { BASE_API_URL } from "../utils/commons";
import { sendMessageFromProfile } from "../reducers/conversations";

const SingleUser = () => {
  const { userId } = useParams();
  const loggedUserId = useSelector((store) => store.user.userId);
  const accessToken = useSelector((store) => store.user.accessToken);
  const [user, setUser] = useState({});

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken) {
      dispatch(getUserData(accessToken));
    }
  }, [accessToken]);

  useEffect(() => {
    if (userId) {
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: accessToken,
        },
      };
      fetch(`${BASE_API_URL}/user/${userId}`, options)
        .then((res) => res.json())
        .then((data) => setUser(data.response));
    }
  }, [userId]);

  const sendMessage = () => {
    dispatch(sendMessageFromProfile(accessToken, userId, navigate));
  };

  return (
    <div className="screen-layout__screen">
      <div className="single-user__container">
        <div>
          <div className="single-user__profile-picture_border">
            <div className="single-user__profile-picture_box">
              <div
                className="single-user__profile-picture"
                style={{ backgroundImage: `url(${user.image})` }}
              ></div>
            </div>
          </div>
        </div>
        <h3 className="single-user__profile-data_name">
          {user.name || "Type your name"}
        </h3>
        <h4 className="single-user__profile-data_login">@{user.login}</h4>

        <button
          onClick={sendMessage}
          className={
            userId === loggedUserId
              ? "single-user__profile_button-hidden"
              : "single-user__profile_button"
          }
        >
          Message
        </button>
      </div>
      <div className="single-user__profile-data">
        <div className="single-user__profile-data_subcontainer">
          <p className="single-user__profile-data_title">Posts</p>
          <span className="single-user__profile-data_number">
            {user?.posts?.length}
          </span>
        </div>
        <div className="single-user__profile-data_subcontainer">
          <p className="single-user__profile-data_title">Followers</p>
          <span className="single-user__profile-data_number">
            {user?.followers?.length}
          </span>
        </div>
        <div className="single-user__profile-data_subcontainer">
          <p className="single-user__profile-data_title">Follows</p>
          <span className="single-user__profile-data_number">
            {user?.follows?.length}
          </span>
        </div>
      </div>
      <div className="single-user__photo-container">
        {user?.posts
          ?.sort((a, b) => b.createdAt - a.createdAt)
          .map((img) => (
            <div
              key={img._id}
              className="single-user__photo"
              style={{ backgroundImage: `url(${img.image})` }}
            ></div>
          ))}
      </div>
    </div>
  );
};

export default SingleUser;
