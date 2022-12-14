import React from "react";
import { Link } from "react-router-dom";

import { messagePlaceholder } from "../utils/commons";

const ConversationsElement = ({
  conversationId,
  interlocutor,
  interlocutorAvatar,
  messages,
}) => {
  const messageToShow = messages[messages.length - 1]?.message;

  console.log(messageToShow);
  return (
    <Link to={`/conversations/${conversationId}`}>
      <div className="screen-layout__single-element">
        <div className="screen-layout__user-avatar_border">
          <div
            className="screen-layout__user-avatar"
            style={{ backgroundImage: `url(${interlocutorAvatar})` }}
          ></div>
        </div>
        <div>
          <p className="screen-layout__user-name">{interlocutor}</p>
          {messageToShow ? (
            <span className="messages-container__user-message">
              {messageToShow}
            </span>
          ) : (
            <span className="messages-container__message-placeholder">
              {messagePlaceholder}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ConversationsElement;
