import React from "react";
import { useSelector } from "react-redux";

import ConversationsElement from "../components/ConversationsElement";

const ConversationsList = () => {
  const conversationsList = useSelector((store) => store.conversations.list);
  const userId = useSelector((store) => store.user.userId);

  return (
    <div className="screen-layout__screen">
      <h2 className="screen-layout__title">Messages</h2>
      <div className="messages-container__messages">
        {conversationsList
          .filter((conversation) => conversation.messages.length !== 0)
          .map((conversation) => {
            const interlocutor = conversation.interlocutors.find(
              (user) => user._id !== userId
            );
            return (
              <ConversationsElement
                key={conversation._id}
                conversationId={conversation._id}
                interlocutor={interlocutor.name}
                interlocutorAvatar={interlocutor.image}
                messages={conversation.messages}
              />
            );
          })}
      </div>
    </div>
  );
};

export default ConversationsList;
