import React from "react";
import { useParams } from "react-router";

const SingleUser = () => {
  const { userName } = useParams();

  return (
    <div className="single-user">
      <div className="single-user__container">
        <div className="single-user__profile-picture_container">
          <div className="single-user__profile-picture_border">
            <div className="single-user__profile-picture_box">
              <div className="single-user__profile-picture"></div>
            </div>
          </div>
        </div>
        <h3 className="single-user__profile-data_name">Name</h3>
        <h4 className="single-user__profile-data_login">@Login</h4>
        <button className="single-user__profile_button">Message</button>
      </div>
      <div className="single-user__profile-data">
        <div className="single-user__profile-data_subcontainer">
          <p className="single-user__profile-data_title">Posts</p>
          <span className="single-user__profile-data_number">35</span>
        </div>
        <div className="single-user__profile-data_subcontainer">
          <p className="single-user__profile-data_title">Followers</p>
          <span className="single-user__profile-data_number">1,552</span>
        </div>
        <div className="single-user__profile-data_subcontainer">
          <p className="single-user__profile-data_title">Follows</p>
          <span className="single-user__profile-data_number">128</span>
        </div>
      </div>
      <div className="single-user__photo-container">
        <div className="single-user__photo"></div>
        <div className="single-user__photo"></div>
        <div className="single-user__photo"></div>
        <div className="single-user__photo"></div>
        <div className="single-user__photo"></div>
        <div className="single-user__photo"></div>
      </div>
    </div>
  );
};

export default SingleUser;
