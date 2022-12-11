import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import { getUserData } from "../reducers/user";
import { BASE_API_URL } from "../utils/commons";

const SingleUser = () => {
  const { userId } = useParams();
  const accessToken = useSelector((store) => store.user.accessToken);
  const [user, setUser] = useState({});

  const dispatch = useDispatch();

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
        <button className="single-user__profile_button">Message</button>
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
        {user?.posts?.map((img) => (
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
