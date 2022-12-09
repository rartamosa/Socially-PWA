import React from "react";

const Feed = () => {
  return (
    <div className="screen-layout__screen">
      <h2 className="screen-layout__title">Feed</h2>
      <div className="feed-container__box">
        <div className="feed-continer__data">
          <div className="feed-container__data-container">
            <div className="feed-container__avatar"></div>
            <div className="feed-container__time-name">
              <p className="feed-container__name">name</p>
              <p className="feed-container__time">timing</p>
            </div>
          </div>
        </div>
        <div className="feed-container__likes-container">
          <div className="feed-container__likes-icon"></div>
          <span>12</span>
        </div>
      </div>
      <div className="feed-container__box">
        <div className="feed-continer__data">
          <div className="feed-container__data-container">
            <div className="feed-container__avatar"></div>
            <div className="feed-container__time-name">
              <p className="feed-container__name">name</p>
              <p className="feed-container__time">timing</p>
            </div>
          </div>
        </div>
        <div className="feed-container__likes-container">
          <div className="feed-container__likes-icon"></div>
          <span>12</span>
        </div>
      </div>
      <div className="feed-container__box">
        <div className="feed-continer__data">
          <div className="feed-container__data-container">
            <div className="feed-container__avatar"></div>
            <div className="feed-container__time-name">
              <p className="feed-container__name">name</p>
              <p className="feed-container__time">timing</p>
            </div>
          </div>
        </div>
        <div className="feed-container__likes-container">
          <div className="feed-container__likes-icon"></div>
          <span>12</span>
        </div>
      </div>
      <div className="feed-container__box">
        <div className="feed-continer__data">
          <div className="feed-container__data-container">
            <div className="feed-container__avatar"></div>
            <div className="feed-container__time-name">
              <p className="feed-container__name">name</p>
              <p className="feed-container__time">timing</p>
            </div>
          </div>
        </div>
        <div className="feed-container__likes-container">
          <div className="feed-container__likes-icon"></div>
          <span>12</span>
        </div>
      </div>
    </div>
  );
};

export default Feed;
