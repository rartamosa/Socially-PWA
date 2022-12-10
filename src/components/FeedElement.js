import React from "react";

const FeedElement = ({ avatar, userName, createdAt, imgURL, likes }) => {
  return (
    <div
      className="feed-container__box"
      style={{ backgroundImage: `url(${imgURL})` }}
    >
      <div className="feed-continer__data">
        <div className="feed-container__data-container">
          <div
            className="feed-container__avatar"
            style={{ backgroundImage: `url(${avatar})` }}
          ></div>
          <div className="feed-container__time-name">
            <p className="feed-container__name">{userName}</p>
            <p className="feed-container__time">
              {new Date(createdAt).toDateString()}
            </p>
          </div>
        </div>
      </div>
      <div className="feed-container__likes-container">
        <div className="feed-container__likes-icon"></div>
        <span>{likes}</span>
      </div>
    </div>
  );
};

export default FeedElement;
