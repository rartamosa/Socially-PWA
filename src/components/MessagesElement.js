import React from "react";
import { Link } from "react-router-dom";

// import { useParams } from "react-router";

const MessagesElement = ({
  conversationId,
  interlocutorA,
  interlocutorB,
  messages,
}) => {
  const messageToShow = messages[messages.length - 1].message;

  //   const { conversationId } = useParams();

  return (
    <Link to={`/messages/${conversationId}`}>
      <div className="screen-layout__single-element">
        <div className="screen-layout__user-avatar_border">
          <div
            className="screen-layout__user-avatar"
            // style={{backgroundImage: `url(${})`,}}
          ></div>
        </div>
        <div>
          <p className="screen-layout__user-name">{interlocutorB}</p>
          <span className="messages-container__user-message">
            {messageToShow}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default MessagesElement;
