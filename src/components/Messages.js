import React from "react";
import { Link } from "react-router-dom";

const Messages = () => {
  return (
    <div className="screen-layout__screen">
      <h2 className="screen-layout__title">Messages</h2>
      <div className="messages-container__messages">
        <div className="screen-layout__single-element">
          <div className="screen-layout__user-avatar_border">
            <div className="screen-layout__user-avatar"></div>
          </div>
          <div>
            <p className="screen-layout__user-name">name</p>
            <span className="messages-container__user-message">message</span>
          </div>
        </div>
      </div>
      {/* <Link to={`/messages/${userName}`} /> */}
    </div>
  );
};

export default Messages;
