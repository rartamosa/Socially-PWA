import React from "react";
import { formatDistanceToNow } from "date-fns";
import { useSelector, useDispatch } from "react-redux";

import { LikeButton, UnlikeButton } from "../styled-components/Buttons";

import { toggleLikeFeed } from "../reducers/feed";

const FeedElement = ({
  avatar,
  userName,
  createdAt,
  imgURL,
  likes,
  feedId,
}) => {
  const accessToken = useSelector((store) => store.user.accessToken);
  const loggedUserId = useSelector((store) => store.user.userId);
  const dispatch = useDispatch();

  const toggleLikes = (accessToken, feedId) => {
    dispatch(toggleLikeFeed(accessToken, feedId));
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
        onClick={() => toggleLikes(accessToken, feedId)}
        className="feed-container__likes-container"
      >
        {likes.includes(loggedUserId) || likes.length < 0 ? (
          <UnlikeButton />
        ) : (
          <LikeButton />
        )}
        <span>{likes.length}</span>
      </div>
    </div>
  );
};

export default FeedElement;
