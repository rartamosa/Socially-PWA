import React from "react";
import { formatDistanceToNow } from "date-fns";
import { useSelector, useDispatch } from "react-redux";

import { LikeButton, UnlikeButton } from "../styled-components/Buttons";

import { likeFeed } from "../reducers/feed";

const FeedElement = ({
  avatar,
  userName,
  createdAt,
  imgURL,
  likes,
  feedId,
}) => {
  const accessToken = useSelector((store) => store.user.accessToken);
  const dispatch = useDispatch();

  const likeUserFeed = (accessToken, feedId) => {
    dispatch(likeFeed(accessToken, feedId));
  };

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
              {formatDistanceToNow(new Date(createdAt))} ago
            </p>
          </div>
        </div>
      </div>
      <div
        onClick={() => likeUserFeed(accessToken, feedId)}
        className="feed-container__likes-container"
      >
        {/* warunkowo renderować odpowiedni button */}
        <LikeButton />
        {/* <UnlikeButton /> */}
        <span>{likes}</span>
      </div>
    </div>
  );
};

export default FeedElement;
