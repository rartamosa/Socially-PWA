import React from "react";
import { Link } from "react-router-dom";

const MessagesElement = ({
  conversationId,
  interlocutor,
  interlocutorAvatar,
  messages,
}) => {
  const messageToShow = messages[messages.length - 1].message;

  return (
    <Link to={`/messages/${conversationId}`}>
      <div className="screen-layout__single-element">
        <div className="screen-layout__user-avatar_border">
          <div
            className="screen-layout__user-avatar"
            style={{ backgroundImage: `url(${interlocutorAvatar})` }}
          ></div>
        </div>
        <div>
          <p className="screen-layout__user-name">{interlocutor}</p>
          <span className="messages-container__user-message">
            {messageToShow}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default MessagesElement;
