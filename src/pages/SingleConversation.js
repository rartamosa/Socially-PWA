import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { Input } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { styled } from "@mui/material/styles";

import { PrimaryButton } from "../styled-components/Buttons";

import { sendMessage } from "../reducers/conversations";

const SingleConversation = () => {
  const [message, setMessage] = useState("");

  const { conversationId } = useParams();

  const conversation = useSelector((store) =>
    store.conversations.list.find((item) => item._id === conversationId)
  );
  const userId = useSelector((store) => store.user.userId);

  const dispatch = useDispatch();

  const executeScroll = useRef(null);

  useEffect(() => {
    if (conversation.messages.length > 0) {
      executeScroll.current.scrollIntoView({ block: "end" });
    }
  }, [conversation]);

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (message !== "") {
      dispatch(sendMessage(conversationId, userId, message));
      setMessage("");
    }
  };

  return (
    <div className="screen-layout__screen single-conversation__screen">
      <h2 className="screen-layout__title">
        Message to{" "}
        {
          conversation.interlocutors
            .find((user) => user._id !== userId)
            .name.split(" ")[0]
        }
      </h2>
      <div className="single-conversation__container">
        <div className="single-conversation__chat-container">
          {conversation.messages.map((message, index, array) => (
            <div
              key={message._id}
              className={
                userId === message.author
                  ? "single-conversation__interlocutorA-message"
                  : "single-conversation__interlocutorB-message"
              }
              ref={array.length - 1 === index ? executeScroll : null}
            >
              {message.message}
            </div>
          ))}
        </div>
      </div>
      <form
        onSubmit={onFormSubmit}
        className="sign-container__form single-conversation__form"
      >
        <ConversationInput
          type="text"
          placeholder="Write a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></ConversationInput>
        <SendButton type="submit">
          <SendIcon />
        </SendButton>
      </form>
    </div>
  );
};

export default SingleConversation;

const ConversationInput = styled(Input)(() => ({
  position: "relative",
  marginTop: "16px",
  "& .MuiInputBase-input": {
    paddingRight: "85px",
    overflowX: "auto",
    minHeight: "19px",
    textOverflow: "ellipsis",
  },
}));

const SendButton = styled(PrimaryButton)(() => ({
  position: "absolute",
  right: "18px",
  top: "27px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
