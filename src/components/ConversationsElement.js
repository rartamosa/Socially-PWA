import React from "react";
import { Link } from "react-router-dom";

const ConversationsElement = ({
  conversationId,
  interlocutor,
  interlocutorAvatar,
  messages,
}) => {
  const messageToShow = messages[messages.length - 1]?.message;

  return (
    <Link to={`/conversations/${conversationId}`}>
      <div className="conversations-element__single-box">
        <div className="screen-layout__user-avatar_border">
          <div
            className="screen-layout__user-avatar"
            style={{ backgroundImage: `url(${interlocutorAvatar})` }}
          ></div>
        </div>
        <div>
          <p className="screen-layout__user-name">{interlocutor}</p>

          {messageToShow !== undefined && (
            <span className="messages-container__user-message">
              {messageToShow}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ConversationsElement;
