import React from "react";
import { useDispatch, useSelector } from "react-redux";

import ConversationsElement from "../components/ConversationsElement";

const ConversationsList = () => {
  const messagesList = useSelector((store) => store.conversations.list);
  const userId = useSelector((store) => store.user.userId);
  const dispatch = useDispatch();

  return (
    <div className="screen-layout__screen">
      <h2 className="screen-layout__title">Messages</h2>
      <div className="messages-container__messages">
        {messagesList.map((message) => {
          const interlocutor = message.interlocutors.find(
            (user) => user._id !== userId
          );
          console.log(message);
          return (
            <ConversationsElement
              key={message._id}
              conversationId={message._id}
              interlocutor={interlocutor.name}
              interlocutorAvatar={interlocutor.image}
              messages={message.messages}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ConversationsList;
