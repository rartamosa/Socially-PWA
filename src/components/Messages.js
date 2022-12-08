import React from "react";
import { Link } from "react-router-dom";

const Messages = () => {
  return (
    <div className="messages-container">
      <h2 className="screen-layout__title">Messages</h2>
      <div className="messages-container__messages">
        <div className="messages-container__single-message">
          <div>img</div>
          <div>
            <p>name</p>
            <span>message</span>
          </div>
        </div>
      </div>
      {/* <Link to={`/messages/${userName}`} /> */}
    </div>
  );
};

export default Messages;
