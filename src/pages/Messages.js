import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getMessages } from "../reducers/conversations";

import MessagesElement from "../components/MessagesElement";

const Messages = () => {
  const accessToken = useSelector((store) => store.user.accessToken);
  const messagesList = useSelector((store) => store.conversations.list);
  const dispatch = useDispatch();

  useEffect(() => {
    if (accessToken) {
      dispatch(getMessages(accessToken));
    }
  }, [accessToken]);

  // console.log(messagesList);

  return (
    <div className="screen-layout__screen">
      <h2 className="screen-layout__title">Messages</h2>
      <div className="messages-container__messages">
        {messagesList.map((message) => (
          <MessagesElement
            key={message._id}
            conversationId={message._id}
            interlocutorA={message.interlocutors[0]}
            // interlocutorAAvatar={}
            interlocutorB={message.interlocutors[1]}
            // interlocutorBAvatar={}
            messages={message.messages}
          />
        ))}
      </div>
    </div>
  );
};

export default Messages;
