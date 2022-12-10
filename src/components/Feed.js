import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getFeed } from "../reducers/feed";

import FeedElement from "./FeedElement";

const Feed = () => {
  const accessToken = useSelector((store) => store.user.accessToken);
  const feedList = useSelector((store) => store.feed.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFeed(accessToken));
  }, []);

  return (
    <div className="screen-layout__screen">
      <h2 className="screen-layout__title">Feed</h2>
      {feedList.map((feedElement) => (
        <FeedElement
          avatar={feedElement.user.image}
          userName={feedElement.user.name}
          createdAt={feedElement.createdAt}
          imgURL={feedElement.image}
          likes={feedElement.likes}
        />
      ))}
    </div>
  );
};

export default Feed;
